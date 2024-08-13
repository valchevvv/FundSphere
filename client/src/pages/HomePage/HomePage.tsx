import PopularCampaigns from "@/components/PopularCampaigns";
import LatestCampaigns from "@/components/LatestCampaigns";

import banner from "@/assets/banner.png";

import woman from "@/assets/woman.png"
import customers from "@/assets/happy-customers.jpeg"
import { useContext } from "react";
import { ContractContext } from "@/contexts/ContractContext";

const HomePage = () => {

  const { activeCampaigns, fundsCount, totalCollected  } = useContext(ContractContext);

  return (
    <div className="px-12">
      <div className="flex justify-evenly">
      <section className="relative text-center text-white py-16 px-6 rounded-2xl my-5 min-h-[400px] flex items-center justify-center bg-primary">
        <img
          src={banner}
          alt="FundSphere"
          className="absolute inset-0 h-full left-[50%] translate-x-[-50%] object-cover"
        />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-4 backdrop-blur-sm p-3 rounded-2xl shadow bg-black/5">
            Welcome to FundSphere
          </h1>
          <p className="text-xl mb-8 p-3 rounded-2xl backdrop-blur-sm shadow bg-black/5">
            Join our community in making a difference. Explore and support the
            campaigns that matter to you.
          </p>
        </div>
      </section>

      <div className="m-5 p-6 rounded-xl flex justify-end text-background">
        <div className="flex flex-col justify-end gap-5 p-5"
          style={{
            backgroundImage: `url(${woman})`,
            backgroundSize: "50% auto",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
        <div className="flex justify-between items-start gap-48">
          <img src={customers} alt="Happy Customers" className="aspect-square object-cover rounded-3xl w-48" />
          <div className="bg-primary text-foreground p-6 rounded-xl flex flex-col gap-2 text-lg">
            <div className="flex flex-col">
              <span>Active campaigns</span>
              <span className="font-bold">{activeCampaigns}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-end gap-6">
          <div className="bg-primary text-foreground p-6 rounded-xl flex flex-col gap-2 text-lg">
            <span>Funds count</span>
            <span className="font-bold">{fundsCount}</span>
          </div>
          <div className="bg-primary text-foreground p-6 rounded-xl flex flex-col gap-2 text-lg mb-5">
            <span>{totalCollected} (ETH)</span>
            <span className="font-bold">Total collected</span>
          </div>
        </div>
        </div>
      </div>
      </div>
        <PopularCampaigns />
        <LatestCampaigns />
    </div>
  );
};

export default HomePage;
