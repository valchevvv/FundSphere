import { Address } from "viem";
import { abi as CAMPAIGN_ABI } from "../abi/Campaign.json";
import { abi as FACTORY_ABI } from "../abi/CampaignFactory.json";
import { createContext, ReactNode, useEffect, useState } from "react";
import { ethers } from "ethers";

const FACTORY_CONTRACT_ADDRESS = import.meta.env.VITE_WC_FACTORY_CONTRACT_ID;

export interface ICampaign {
  address: Address;
  owner: Address;
  name: string;
  description: string;
  image: string;
  targetAmount: number;
  currentAmount: number;
  transactions: number;
  endDate: string;
}

type FACTORY_TYPE = {
  campaigns: ICampaign[];
  isLoadingCampaigns: boolean;
  isCreatingCampaign: boolean;
  addCampaign: (
    name: string,
    description: string,
    image: string,
    targetAmount: number,
    endDate: string,
    callback: () => void
  ) => void;
  fundCampaign: (
    campaignId: Address,
    amount: bigint,
    callback: () => void
  ) => void;
  popularCampaigns: () => ICampaign[];
  latestCampaigns: () => ICampaign[];
};

export const ContractContext = createContext({} as FACTORY_TYPE);

export const ContractProvider = ({ children }: { children: ReactNode }) => {
  const [campaigns, setCampaigns] = useState<ICampaign[]>([]);
  const [isLoadingCampaigns, setIsLoadingCampaigns] = useState<boolean>(false);
  const [isCreatingCampaign, setIsCreatingCampaign] = useState<boolean>(false);

  const provider = new ethers.BrowserProvider(window.ethereum);

  const getContract = async (address: Address, abi: ethers.InterfaceAbi) => {
    const signer = await provider.getSigner();
    return new ethers.Contract(address, abi, signer);
  };

  const addCampaign = async (
    name: string,
    description: string,
    image: string,
    targetAmount: number,
    endDate: string,
    callback: () => void
  ) => {
    setIsCreatingCampaign(true);
    try {
      const FactoryContract = await getContract(
        FACTORY_CONTRACT_ADDRESS,
        FACTORY_ABI
      );

      await FactoryContract.addCampaign(
        name,
        description,
        image,
        ethers.parseEther(targetAmount.toString()),
        endDate
      );
    } catch (error) {
      console.error(error);
    } finally {
      callback();
      getCampaigns();
      setIsCreatingCampaign(false);
    }
  };

  const fundCampaign = async (
    campaignId: Address,
    amount: bigint,
    callback: () => void
  ) => {
    try {
      const signer = await provider.getSigner();
      const transaction = {
        to: campaignId,
        value: amount,
      };

      const tx = await signer.sendTransaction(transaction);
      await tx.wait();
      getCampaigns();
    } catch (error) {
      console.error("Error funding quiz", error);
    } finally {
      callback();
    }
  };

  const getCampaigns = async () => {
    try {
      setIsLoadingCampaigns(true);
      const FactoryContract = await getContract(
        FACTORY_CONTRACT_ADDRESS,
        FACTORY_ABI
      );
      const campaigns = await FactoryContract.getCampaigns();

      let campaigns_data: ICampaign[] = [];

      for (const campaign_address of campaigns) {
        const CampaignContract = await getContract(
          campaign_address,
          CAMPAIGN_ABI
        );
        const owner = await CampaignContract.owner();
        const name = await CampaignContract.name();
        const description = await CampaignContract.description();
        const image = await CampaignContract.image();
        const targetAmount = await CampaignContract.targetAmount();
        const currentAmount = await CampaignContract.currentAmount();
        const transactions = await CampaignContract.transactions();
        const endDate = await CampaignContract.endDate();

        campaigns_data.push({
          address: campaign_address,
          owner,
          name,
          description,
          image,
          targetAmount: Number(targetAmount),
          currentAmount: Number(currentAmount),
          transactions: Number(transactions),
          endDate,
        });
      }

      setCampaigns(campaigns_data);
    } catch (error) {
    } finally {
      setIsLoadingCampaigns(false);
    }
  };

  const getPopularCampaigns = () => {
    return [...campaigns]
      .sort((a, b) => b.transactions - a.transactions)
      .slice(0, 5);
  };

  const getLatestCampaigns = () => {
    return [...campaigns]
      .sort(
        (a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime()
      )
      .slice(0, 5);
  };

  useEffect(() => {
    getCampaigns();
  }, []);

  return (
    <ContractContext.Provider
      value={{
        campaigns,
        isLoadingCampaigns: isLoadingCampaigns,
        isCreatingCampaign: isCreatingCampaign,
        addCampaign: addCampaign,
        fundCampaign: fundCampaign,
        popularCampaigns: getPopularCampaigns,
        latestCampaigns: getLatestCampaigns,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export default ContractProvider;
