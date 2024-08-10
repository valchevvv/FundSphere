import Campaign from "@/components/Campaign";
import VerticalScrollWrapper from "@/components/VerticalScrollWrapper";
import { ContractContext } from "@/context/ContractContext";
import { useContext } from "react";

const Campaigns = () => {
  const { latestCampaigns } = useContext(ContractContext);

  const campaigns = latestCampaigns();

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold px-2">All Campaigns</h2>
      {campaigns.length ? (
        <VerticalScrollWrapper>
          <div className="flex space-x-6">
            {campaigns.map((campaign, index) => {
              return <Campaign key={index} campaign={campaign} />;
            })}
          </div>
        </VerticalScrollWrapper>
      ) : (
        <div className="flex gap-1 items-center p-2">
          <LoadingSpinner />
          <span>Loading</span>
        </div>
      )}
    </section>
  );
};

export default Campaigns;
