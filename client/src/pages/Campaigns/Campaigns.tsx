import Campaign from "@/components/Campaign";
import { ContractContext } from "@/context/ContractContext";
import { useContext } from "react";

const Campaigns = () => {
  const { campaigns, isLoadingCampaigns: isLoadingCampaigns } =
    useContext(ContractContext);

  return (
    <section className="mx-24 my-5">
      <h3 className="text-3xl font-bold">Popular Campaigns</h3>
      <div>
        {isLoadingCampaigns ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-4 gap-6">
            {campaigns.map((campaign, index) => {
              return <Campaign key={index} campaign={campaign} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Campaigns;
