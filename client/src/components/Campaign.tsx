import user from "@/assets/user.svg";
import { Progress } from "@/components/ui/progress";
import { ContractContext, ICampaign } from "@/contexts/ContractContext";
import { ethers } from "ethers";
import { Button } from "./ui/button";
import { useContext, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useAccount } from "wagmi";

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
        <div className="flex mt-5 justify-between gap-1">
          {campaign.withdrawn ? (
            <Button
              disabled
              className="w-[100%] flex gap-1 rounded-2xl bg-black transition-colors ease-in-out"
            >
              Withdrawn
            </Button>
          ) : (
            <>
              <Button
                className={`w-[100%] flex gap-1 rounded-2xl ${
                  endDatePassed()
                    ? "bg-black"
                    : getProgress >= 100
                      ? "bg-[#40C783] hover:bg-[#339F69]"
                      : "bg-[#4088c7] hover:bg-[#2a5a84]"
                } transition-colors ease-in-out`}
                onClick={() => {
                  setIsFundingCampaign(true);
                  fundCampaign(
                    campaign.address,
                    ethers.parseEther("0.1"),
                    doneFunding
                  );
                }}
                disabled={
                  getProgress >= 100 || isFundingCampaign || endDatePassed()
                }
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
              {isOwned &&
                campaign.currentAmount > 0n &&
                !campaign.withdrawn && (
                  <Button
                    onClick={withdrawFunds}
                    className={`w-[100%] flex gap-1 rounded-2xl ${
                      endDatePassed()
                        ? "bg-black"
                        : getProgress >= 100
                          ? "bg-[#40C783] hover:bg-[#339F69]"
                          : "bg-[#4088c7] hover:bg-[#2a5a84]"
                    } transition-colors ease-in-out`}
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
