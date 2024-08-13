import { Progress } from "@/components/ui/progress";
import { ContractContext, ICampaign } from "@/contexts/ContractContext";
import { ethers } from "ethers";
import { Button } from "./ui/button";
import { useContext, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useAccount } from "wagmi";
import NumberButton from "./NumberButton";

import { GrMoney } from "react-icons/gr";


const format = (amount: bigint): string => {
  return ethers.formatEther(amount);
};

const Campaign = ({ campaign }: { campaign: ICampaign }) => {
  const getProgress = (() => {
    const targetAmount = BigInt(campaign.targetAmount);
    const withdrawnAmount = BigInt(campaign.withdrawnAmount);
    const currentAmount = BigInt(campaign.currentAmount);

    if (withdrawnAmount > 0n) {
      if (withdrawnAmount < targetAmount) {
        return Number((withdrawnAmount * 100n) / targetAmount);
      } else {
        return 100;
      }
    } else {
      if (currentAmount < targetAmount) {
        return Number((currentAmount * 100n) / targetAmount);
      } else {
        return 100;
      }
    }
  })();

  const [isWithdrawing, setIsWithdrawing] = useState<boolean>(false);
  const [isFundingCampaign, setIsFundingCampaign] = useState<boolean>(false);

  const [fundingAmount, setFundingAmount] = useState<number>(0.0005);

  const { address } = useAccount();
  const { fundCampaign, withdrawFundsFromCampaign } =
    useContext(ContractContext);

  const isOwned = address === campaign.owner;

  const endDatePassed = () => {
    const endDate = new Date(campaign.endDate);
    const currentDate = new Date();
    return endDate < currentDate;
  };

  const doneFunding = () => {
    setIsFundingCampaign(false);
  };

  const doneWithdrawing = () => {
    setIsWithdrawing(false); // Reset state after withdrawing
  };

  const withdrawFunds = () => {
    setIsWithdrawing(true);
    withdrawFundsFromCampaign(campaign.address, doneWithdrawing); // Call the context method
  };

  return (
    <div className="bg-card border rounded-2xl min-w-96 mt-10">
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
        <div className="w-full flex py-1 gap-2 items-center mb-2">
          <GrMoney size={20} />
          {campaign.transactions} Donations
        </div>
        <div>
          <Progress value={getProgress} className="h-2 my-2" />
          <div className="flex justify-between">
            <p className="text-xs font-bold">
              Donated:{" "}
              {campaign.withdrawnAmount > 0n
                ? format(BigInt(campaign.withdrawnAmount))
                : format(BigInt(campaign.currentAmount))}{" "}
              ETH
            </p>
            <p className="text-xs text-slate-400">
              From: {format(BigInt(campaign.targetAmount))} ETH
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-5 justify-between gap-3 w-[100%]">
          <NumberButton
            campaign={campaign}
            endDatePassed={endDatePassed}
            getProgress={getProgress}
            setIsFundingCampaign={setIsFundingCampaign}
            fundCampaign={fundCampaign}
            fundingAmount={fundingAmount}
            setFundingAmount={setFundingAmount}
            doneFunding={doneFunding}
            isFundingCampaign={isFundingCampaign}
          />
          {campaign.withdrawn ? (
            <Button
              disabled
              className="w-[100%] flex gap-1 rounded-2xl bg-secondary transition-colors ease-in-out"
            >
              Withdrawn
            </Button>
          ) : (
            <>
              {isOwned &&
                campaign.currentAmount > 0n &&
                !campaign.withdrawn && (
                  <Button
                    disabled={isWithdrawing || isFundingCampaign}
                    onClick={withdrawFunds}
                    className="w-[100%] flex gap-1 rounded-2xl transition-colors ease-in-out"
                  >
                    {isWithdrawing ? (
                      <LoadingSpinner />
                    ) : (
                      `Withdraw Funds (${format(BigInt(campaign.currentAmount))} ETH)`
                    )}
                  </Button>
                )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Campaign;
