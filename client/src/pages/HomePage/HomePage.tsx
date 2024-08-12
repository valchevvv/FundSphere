import PopularCampaigns from "@/components/PopularCampaigns";
import LatestCampaigns from "@/components/LatestCampaigns";

import banner from "@/assets/banner.png";

const HomePage = () => {
  return (
    <div className="p-6">
      <section className="relative text-center text-white py-16 px-6 rounded-2xl my-5 min-h-[400px] flex items-center justify-center bg-[#40C783]/70">
        <img
          src={banner}
          alt="FundSphere"
          className="absolute inset-0 h-full left-[50%] translate-x-[-50%] object-cover opacity-50"
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
      <PopularCampaigns />
      <LatestCampaigns />
    </div>
  );
};

export default HomePage;
