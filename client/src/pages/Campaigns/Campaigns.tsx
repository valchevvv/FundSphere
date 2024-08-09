import Campaign from "@/components/Campaign";
import { ContractContext } from "@/context/ContractContext";
import { useContext } from "react";

const Campaigns = () => {
  const { compaigns, isLoadingCompaigns } = useContext(ContractContext);

  return (
    <section className="mx-24 my-5">
      <h3 className="text-3xl font-bold">Popular Campaigns</h3>
      <div>
        {isLoadingCompaigns ? (
          <p>Loading...</p>
        ) : (
          <div className="flex gap-6">
            {compaigns.map((compaign, index) => {
              return <Campaign key={index} compaign={compaign} />;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Campaigns;
