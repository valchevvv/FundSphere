import user from "@/assets/user.svg";
import { Progress } from "@/components/ui/progress";
import {
  ContractContext,
  ICampaign as ICampaign,
} from "@/context/ContractContext";
import { ethers } from "ethers";
import { Button } from "./ui/button";
import { useContext, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const Campaign = ({ campaign: campaign }: { campaign: ICampaign }) => {
  const getProgress = (campaign.currentAmount / campaign.targetAmount) * 100;

  const endDatePassed = () => {
    const endDate = new Date(campaign.endDate);
    const currentDate = new Date();

    return endDate < currentDate;
  };

  const [isFundingCampaign, setIsFundingCampaign] = useState<boolean>(false);

  const { fundCampaign } = useContext(ContractContext);

  const doneFunding = () => {
    setIsFundingCampaign(false);
  };

  return (
    <div className="bg-[#EDEFFC] border rounded-2xl min-w-96 mt-10">
      <div>
        <img
          src={
            campaign.image ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFyxmn_HPV2VAHFChq8-eufoQVYpXiz3RSEA&s"
          }
          className="rounded-t-2xl w-[100%]"
        />
      </div>
      <div className="p-4">
        <h5 className="text-xl font-bold mb-2">{campaign.name}</h5>
        <p className="mb-4">{campaign.description}</p>
        <div className="w-full flex mb-2">
          <img src={user} className="mr-2" /> {campaign.transactions} Donations
        </div>
        <div>
          <Progress value={getProgress} className="h-2 my-2" />
          <div className="flex justify-between">
            <p className="text-xs font-bold">
              Donated: {ethers.formatEther(campaign.currentAmount)} eth
            </p>
            <p className="text-xs text-slate-400">
              From: {ethers.formatEther(campaign.targetAmount)} eth
            </p>
          </div>
        </div>
        <Button
          className={`w-[100%] mt-5 flex gap-1 rounded-2xl ${endDatePassed() ? "bg-black" : getProgress >= 100 ? "bg-[#40C783] hover:bg-[#339F69]" : "bg-[#4088c7] hover:bg-[#2a5a84]"}  transition-colors ease-in-out`}
          onClick={() => {
            setIsFundingCampaign(true);
            fundCampaign(
              campaign.address,
              ethers.parseEther("0.0005"),
              doneFunding
            );
          }}
          disabled={getProgress >= 100 || isFundingCampaign || endDatePassed()}
        >
          {isFundingCampaign && <LoadingSpinner />}
          {endDatePassed() ? (
            <span>End date passed</span>
          ) : isFundingCampaign ? (
            <span>Funding</span>
          ) : getProgress >= 100 ? (
            <span>Completed</span>
          ) : (
            <span>Donate (0.0005 ETH)</span>
          )}
        </Button>
      </div>
    </div>
  );
};
export default Campaign;
