import Campaign from "@/components/Campaign";
import LoadingSpinner from "@/components/LoadingSpinner";
import VerticalScrollWrapper from "@/components/VerticalScrollWrapper";
import { ContractContext } from "@/contexts/ContractContext";
import { useContext } from "react";

const LatestCampaigns = () => {
  const { latestCampaigns, isLoadingCampaigns } = useContext(ContractContext);

  const campaigns = latestCampaigns();

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold px-2">Latest Campaigns</h2>
      {!isLoadingCampaigns ?
        campaigns.length > 0 ?
          (
            <VerticalScrollWrapper>
              <div className="flex">
                {campaigns.map((campaign, index) => {
                  return <Campaign key={index} campaign={campaign} />;
                })}
              </div>
            </VerticalScrollWrapper>
          ) :
          <div className="flex gap-1 items-center p-2 font-semibold text-black/50">
            <span>No campaigns available</span>
          </div>
        : (
          <div className="flex gap-1 items-center p-2">
            <LoadingSpinner />
            <span>Loading</span>
          </div>
        )}
    </section>
  );
};

export default LatestCampaigns;
