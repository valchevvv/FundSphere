import Campaign from "@/components/Campaign";
import LoadingSpinner from "@/components/LoadingSpinner";
import { ContractContext } from "@/contexts/ContractContext";
import { useContext } from "react";

const Campaigns = () => {
  const { campaigns, isLoadingCampaigns } = useContext(ContractContext);

  return (
    <section className="p-10">
      <h2 className="text-2xl font-bold w-full flex justify-center">
        All Campaigns
      </h2>
      {
        !isLoadingCampaigns ? campaigns.length ? (
          <div className="flex flex-wrap justify-around">
            {campaigns.map((campaign, index) => {
              return <Campaign key={index} campaign={campaign} />;
            })}
          </div>
        ) :
          <div className="flex gap-1 items-center p-2 font-semibold text-black/50">
            <span>No campaigns available</span>
          </div>
          :
          <div className="flex gap-1 items-center p-2">
            <LoadingSpinner />
            <span>Loading</span>
          </div>
      }
    </section>
  );
};

export default Campaigns;
