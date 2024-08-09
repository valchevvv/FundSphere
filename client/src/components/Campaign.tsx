import user from "@/assets/user.svg";
import { Progress } from "@/components/ui/progress";
import { ICompaign } from "@/context/ContractContext";
import { ethers } from "ethers";

const Campaign = ({ compaign }: { compaign: ICompaign }) => {
  const getProgress = (compaign.currentAmmount / compaign.targetAmmount) * 100;

  return (
    <div className="bg-[#EDEFFC] border rounded-2xl w-72 mt-10">
      <div>
        <img
          src={
            compaign.image ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFyxmn_HPV2VAHFChq8-eufoQVYpXiz3RSEA&s"
          }
          className="rounded-t-2xl"
        />
      </div>
      <div className="p-4 pb-8">
        <h5 className="text-xl font-bold mb-2">{compaign.name}</h5>
        <p className="mb-4">{compaign.description}</p>
        <div className="w-full flex mb-2">
          <img src={user} className="mr-2" /> {compaign.transactions} Donators
        </div>
        <div>
          <Progress value={getProgress} className="h-2 my-2" />
          <div className="flex justify-between">
            <p className="text-xs font-bold">
              Donated: {ethers.formatEther(compaign.currentAmmount)} eth
            </p>
            <p className="text-xs text-slate-400">
              From: {ethers.formatEther(compaign.targetAmmount)} eth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Campaign;
