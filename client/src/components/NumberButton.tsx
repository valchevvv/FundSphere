import { ethers } from "ethers";
import LoadingSpinner from "./LoadingSpinner";
import { ICampaign } from "@/contexts/ContractContext";
import { Address } from "viem";

interface NumberButtonProps {
    campaign: ICampaign;
    endDatePassed: () => boolean;
    getProgress: number;
    setIsFundingCampaign: (isFundingCampaign: boolean) => void;
    fundCampaign: (address: Address, amount: bigint, doneFunding: () => void) => void;
    fundingAmount: number;
    setFundingAmount: (fundingAmount: number) => void;
    doneFunding: () => void;
    isFundingCampaign: boolean;
}

const NumberButton = ({
    campaign,
    endDatePassed,
    getProgress,
    setIsFundingCampaign,
    fundCampaign,
    fundingAmount,
    setFundingAmount,
    doneFunding,
    isFundingCampaign
}: NumberButtonProps) => {
    return (
        <div className="flex w-[100%]">
            <input
                type="number"
                name="fundingAmount"
                id="fundingAmount"
                value={fundingAmount}
                onChange={(e) => setFundingAmount(parseFloat(e.target.value))}
                step={0.0001}
                min={0.0001}
                className="py-2 px-4 rounded-2xl rounded-tr-none rounded-br-none w-[60%] bg-white disabled:opacity-50"
                disabled={isFundingCampaign || endDatePassed() || getProgress >= 100}
            />
            <button
                className={`inline-flex items-center gap-1 px-3 rounded-2xl text-white transition-colors ease-in-out w-[40%] disabled:opacity-50 ${endDatePassed()
                        ? "bg-black"
                        : getProgress >= 100
                            ? "bg-[#40C783] hover:bg-[#339F69]"
                            : "bg-[#4088c7] hover:bg-[#2a5a84]"
                    } rounded-tl-none rounded-bl-none`}
                onClick={() => {
                    setIsFundingCampaign(true);
                    fundCampaign(
                        campaign.address,
                        ethers.parseEther(fundingAmount.toString()),
                        doneFunding
                    );
                }}
                disabled={
                    getProgress >= 100 || isFundingCampaign || endDatePassed()
                }
                style={{ whiteSpace: 'nowrap' }}
            >
                {isFundingCampaign && <LoadingSpinner />}
                {endDatePassed() ? (
                    <span>End date passed</span>
                ) : isFundingCampaign ? (
                    <span>Funding</span>
                ) : getProgress >= 100 ? (
                    <span>Completed</span>
                ) : (
                    <span>Donate (ETH)</span>
                )}
            </button>
        </div>
    );
};

export default NumberButton;
