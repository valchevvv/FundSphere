import Campaign from "@/components/Campaign";
import LoadingSpinner from "@/components/LoadingSpinner";
import { ContractContext } from "@/context/ContractContext";
import { useContext } from "react";

const Campaigns = () => {
  const { campaigns } = useContext(ContractContext);

  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold px-2">All Campaigns</h2>
      {campaigns.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {campaigns.map((campaign, index) => {
            return <Campaign key={index} campaign={campaign} />;
          })}
        </div>
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
