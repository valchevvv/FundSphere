import { Address } from "viem";
import { abi as CAMPAIGN_ABI } from "../abi/Campaign.json";
import { abi as FACTORY_ABI } from "../abi/CampaignFactory.json";
import { createContext, ReactNode, useEffect, useState, useCallback } from "react";
import { ethers } from "ethers";

const FACTORY_CONTRACT_ADDRESS = import.meta.env.VITE_WC_FACTORY_CONTRACT_ID;

export interface ICampaign {
  address: Address;
  owner: Address;
  name: string;
  description: string;
  image: string;
  targetAmount: bigint;
  currentAmount: bigint;
  transactions: number;
  endDate: string;
  withdrawn: boolean;
  withdrawnAmount: bigint;
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
  fundCampaign: (campaignId: Address, amount: bigint, callback: () => void) => void;
  withdrawFundsFromCampaign: (campaignAddress: Address, callback: () => void) => void;
  popularCampaigns: () => ICampaign[];
  latestCampaigns: () => ICampaign[];
  isWalletConnected: boolean;
  isProviderAvailable: boolean;
};

export const ContractContext = createContext<FACTORY_TYPE>({
  campaigns: [],
  isLoadingCampaigns: false,
  isCreatingCampaign: false,
  addCampaign: () => {},
  fundCampaign: () => {},
  withdrawFundsFromCampaign: () => {},
  popularCampaigns: () => [],
  latestCampaigns: () => [],
  isWalletConnected: false,
  isProviderAvailable: false,
});

export const ContractProvider = ({ children }: { children: ReactNode }) => {
  const [campaigns, setCampaigns] = useState<ICampaign[]>([]);
  const [isLoadingCampaigns, setIsLoadingCampaigns] = useState(false);
  const [isCreatingCampaign, setIsCreatingCampaign] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);

  useEffect(() => {
    if (window.ethereum) {
      const newProvider = new ethers.BrowserProvider(window.ethereum);
      setProvider(newProvider);

      const checkWalletConnection = async () => {
        try {
          const accounts = await window.ethereum.request({ method: "eth_accounts" });
          setIsWalletConnected(accounts.length > 0);
        } catch (error) {
          console.error("Error checking wallet connection:", error);
        }
      };

      window.ethereum.on("accountsChanged", checkWalletConnection);
      window.ethereum.on("chainChanged", checkWalletConnection);

      checkWalletConnection();

      return () => {
        window.ethereum.removeListener("accountsChanged", checkWalletConnection);
        window.ethereum.removeListener("chainChanged", checkWalletConnection);
      };
    }
  }, []);

  const getContract = useCallback(
    async (address: Address, abi: ethers.InterfaceAbi) => {
      if (!provider) throw new Error("Provider not available");
      const signer = await provider.getSigner();
      return new ethers.Contract(address, abi, signer);
    },
    [provider]
  );

  const getCampaigns = useCallback(async () => {
    if (!provider) return;
    setIsLoadingCampaigns(true);
    try {
      const FactoryContract = await getContract(FACTORY_CONTRACT_ADDRESS, FACTORY_ABI);
      const campaignAddresses = await FactoryContract.getCampaigns();
      const campaignsData = await Promise.all(
        campaignAddresses.map(async (address: Address) => {
          const CampaignContract = await getContract(address, CAMPAIGN_ABI);
          return {
            address,
            owner: await CampaignContract.owner(),
            name: await CampaignContract.name(),
            description: await CampaignContract.description(),
            image: await CampaignContract.image(),
            targetAmount: BigInt(await CampaignContract.targetAmount()),
            currentAmount: BigInt(await CampaignContract.currentAmount()),
            transactions: Number(await CampaignContract.transactions()),
            endDate: await CampaignContract.endDate(),
            withdrawn: await CampaignContract.withdrawn(),
            withdrawnAmount: BigInt(await CampaignContract.withdrawnAmount()),
          };
        })
      );
      setCampaigns(campaignsData);
    } catch (error) {
      console.error("Error fetching campaigns:", error);
    } finally {
      setIsLoadingCampaigns(false);
    }
  }, [provider, getContract]);

  const addCampaign = useCallback(
    async (
      name: string,
      description: string,
      image: string,
      targetAmount: number,
      endDate: string,
      callback: () => void
    ) => {
      if (!provider) return;
      setIsCreatingCampaign(true);
      try {
        const FactoryContract = await getContract(FACTORY_CONTRACT_ADDRESS, FACTORY_ABI);
        const tx = await FactoryContract.addCampaign(
          name,
          description,
          image,
          ethers.parseEther(targetAmount.toString()),
          endDate
        );
        await tx.wait();
        await getCampaigns();
      } catch (error) {
        console.error("Error adding campaign:", error);
      } finally {
        setIsCreatingCampaign(false);
        callback();
      }
    },
    [provider, getContract, getCampaigns]
  );

  const fundCampaign = useCallback(
    async (campaignId: Address, amount: bigint, callback: () => void) => {
      if (!provider) return;
      try {
        const signer = await provider.getSigner();
        const tx = await signer.sendTransaction({ to: campaignId, value: amount });
        await tx.wait();
        await getCampaigns();
      } catch (error) {
        console.error("Error funding campaign:", error);
      } finally {
        callback();
      }
    },
    [provider, getCampaigns]
  );

  const withdrawFundsFromCampaign = useCallback(
    async (campaignAddress: Address, callback: () => void) => {
      if (!provider) return;
      try {
        const CampaignContract = await getContract(campaignAddress, CAMPAIGN_ABI);
        const tx = await CampaignContract.withdraw();
        await tx.wait();
        await getCampaigns();
      } catch (error) {
        console.error("Error withdrawing funds:", error);
      } finally {
        callback();
      }
    },
    [provider, getContract, getCampaigns]
  );

  useEffect(() => {
    if (provider) {
      getCampaigns();

      const FactoryContract = getContract(FACTORY_CONTRACT_ADDRESS, FACTORY_ABI);

      FactoryContract.then(contract => {
        contract.on("CampaignCreated", async (campaignAddress, owner, name, description, image, targetAmount, endDate) => {
          setCampaigns(prevCampaigns => [
            ...prevCampaigns,
            {
              address: campaignAddress,
              owner,
              name,
              description,
              image,
              targetAmount: BigInt(targetAmount),
              currentAmount: BigInt(0),
              transactions: 0,
              endDate,
              withdrawn: false,
              withdrawnAmount: BigInt(0),
            },
          ]);
        });

        contract.on("FundsWithdrawn", getCampaigns);
      });
    }
  }, [provider, getContract, getCampaigns]);

  return (
    <ContractContext.Provider
      value={{
        campaigns,
        isLoadingCampaigns,
        isCreatingCampaign,
        addCampaign,
        fundCampaign,
        withdrawFundsFromCampaign,
        popularCampaigns: () =>
          campaigns.slice().sort((a, b) => b.transactions - a.transactions).slice(0, 5),
        latestCampaigns: () =>
          campaigns.slice().sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime()).slice(0, 5),
        isWalletConnected,
        isProviderAvailable: !!provider,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export default ContractProvider;
