import user from "@/assets/user.svg";
import { Progress } from "@/components/ui/progress";
import { ICompaign } from "@/context/ContractContext";

const Campaign = ({ compaign }: { compaign: ICompaign }) => {
  const getProgress = (compaign.currentAmmount / compaign.targetAmmount) * 100;

  return (
    <div className="bg-[#EDEFFC] border rounded-2xl w-72 mt-10">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/71/Wolfsburg_VW-Werk.jpg"
          className="rounded-t-2xl"
        />
      </div>
      <div className="p-4 pb-8">
        <h5 className="text-xl font-bold mb-2">{compaign.name}</h5>
        <p className="mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem eos.
        </p>
        <div className="w-full flex mb-2">
          <img src={user} className="mr-2" /> {compaign.transactions} Donators
        </div>
        <div>
          <Progress value={getProgress} className="h-2 my-2" />
          <div className="flex justify-between">
            <p className="text-xs font-bold">
              Donated: {compaign.currentAmmount} eth
            </p>
            <p className="text-xs text-slate-400">
              From: {compaign.targetAmmount} eth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Campaign;
