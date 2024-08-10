import { Button } from "@/components/ui/button";
import one from "@/assets/1.svg";
import two from "@/assets/2.svg";
import three from "@/assets/3.svg";
import VerticalScrollWrapper from "@/components/VerticalScrollWrapper";
import { useAccount } from "wagmi";

// Import a background image

const HomePage = () => {
  const account = useAccount();

  const campaigns = [
    { title: "Campaign Title 1", img: one },
    { title: "Campaign Title 2", img: two },
    { title: "Campaign Title 3", img: three },
    { title: "Campaign Title 4", img: one },
    { title: "Campaign Title 5", img: two },
    { title: "Campaign Title 6", img: three },
    { title: "Campaign Title 7", img: one },
    { title: "Campaign Title 8", img: two },
    { title: "Campaign Title 9", img: three },
    { title: "Campaign Title 10", img: one },
  ];

  return (
    <div className="p-6">
      {/* Welcome Section */}
      <section className="relative text-center text-white py-16 px-6 rounded-2xl m-5 min-h-[400px] flex items-center justify-center bg-[#40C783]/70">
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">Welcome to FundSphere</h1>
          <p className="text-xl mb-8">
            Join our community in making a difference. Explore and support the
            campaigns that matter to you.
          </p>
        </div>
      </section>

      {/* Popular Campaigns Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Popular Campaigns</h2>
        <VerticalScrollWrapper>
          <div className="flex space-x-6">
            {campaigns.map((campaign, index) => (
              <div key={index} className="campaign-card min-w-[250px]">
                <img
                  src={campaign.img}
                  alt={`Campaign ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <h3 className="text-xl font-medium mt-4">{campaign.title}</h3>
                <p className="text-gray-600 mt-2">
                  Brief description of the campaign...
                </p>
              </div>
            ))}
          </div>
        </VerticalScrollWrapper>
      </section>

      {/* Latest Campaigns Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Latest Campaigns</h2>
        <VerticalScrollWrapper>
          <div className="flex space-x-6">
            {campaigns.map((campaign, index) => (
              <div key={index} className="campaign-card min-w-[250px]">
                <img
                  src={campaign.img}
                  alt={`Campaign ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <h3 className="text-xl font-medium mt-4">{campaign.title}</h3>
                <p className="text-gray-600 mt-2">
                  Brief description of the campaign...
                </p>
              </div>
            ))}
          </div>
        </VerticalScrollWrapper>
      </section>

      {/* Explore All Campaigns Button */}
      <div className="text-center">
        <Button className="px-6 py-3 bg-[#40C783] text-white rounded-lg">
          Explore All Campaigns
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
