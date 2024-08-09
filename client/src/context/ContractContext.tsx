import { Address } from "viem";
import { abi as COMPAIGN_ABI } from "../abi/Compaign.json";
import { abi as FACTORY_ABI } from "../abi/CompaignFactory.json";
import { createContext, ReactNode, useEffect, useState } from "react";
import { ethers } from "ethers";

const FACTORY_CONTRACT_ADDRESS = import.meta.env.VITE_WC_FACTORY_CONTRACT_ID;

export interface ICompaign {
  owner: Address;
  name: string;
  description: string;
  image: string;
  targetAmmount: number;
  currentAmmount: number;
  transactions: number;
  endDate: string;
}

type FACTORY_TYPE = {
  compaigns: ICompaign[];
  isLoadingCompaigns: boolean;
};

export const ContractContext = createContext({} as FACTORY_TYPE);

export const ContractProvider = ({ children }: { children: ReactNode }) => {
  const [compaigns, setCompaigns] = useState<ICompaign[]>([]);
  const [isLoadingCompaigns, setIsLoadingCompaigns] = useState<boolean>(false);

  const provider = new ethers.BrowserProvider((window as any).ethereum);

  const getContract = async (address: Address, abi: ethers.InterfaceAbi) => {
    const signer = await provider.getSigner();
    return new ethers.Contract(address, abi, signer);
  };

  const getCompaigns = async () => {
    try {
      setIsLoadingCompaigns(true);
      const FactoryContract = await getContract(
        FACTORY_CONTRACT_ADDRESS,
        FACTORY_ABI
      );
      const compaigns = await FactoryContract.getCompaigns();

      let compaigns_data: ICompaign[] = [];

      for (const compaign_address of compaigns) {
        console.log("compaign_address: ", compaign_address);
        const CompaignContract = await getContract(
          compaign_address,
          COMPAIGN_ABI
        );
        const owner = await CompaignContract.owner();
        const name = await CompaignContract.name();
        const description = await CompaignContract.description();
        const image = await CompaignContract.image();
        const targetAmmount = await CompaignContract.targetAmmount();
        const currentAmmount = await CompaignContract.currentAmmount();
        const transactions = await CompaignContract.transactions();
        const endDate = await CompaignContract.endDate();

        compaigns_data.push({
          owner,
          name,
          description,
          image,
          targetAmmount: Number(targetAmmount),
          currentAmmount: Number(currentAmmount),
          transactions: Number(transactions),
          endDate,
        });
      }

      setCompaigns(compaigns_data);
    } catch (error) {
    } finally {
      setIsLoadingCompaigns(false);
    }
  };

  useEffect(() => {
    getCompaigns();
  }, []);

  return (
    <ContractContext.Provider
      value={{
        compaigns,
        isLoadingCompaigns,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};

export default ContractProvider;
