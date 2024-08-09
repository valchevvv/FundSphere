import user from "@/assets/user.svg";
import { Progress } from "@/components/ui/progress";

const Campaign = () => {
  return (
    <div className="bg-[#EDEFFC] border rounded-2xl w-72 mt-10">
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/71/Wolfsburg_VW-Werk.jpg"
          className="rounded-t-2xl"
        />
      </div>
      <div className="p-4 pb-8">
        <h5 className="text-xl font-bold mb-2">Save the volkswagen</h5>
        <p className="mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem eos.
        </p>
        <div className="w-full flex mb-2">
          <img src={user} className="mr-2" /> 70 Donators
        </div>
        <div>
          <Progress value={90} className="h-2 my-2" />
          <div className="flex justify-between">
            <p className="text-xs font-bold">Donated: 12312312 eth</p>
            <p className="text-xs text-slate-400">From: 19123921 eth</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Campaign;
