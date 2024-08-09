import { Button } from "@/components/ui/button";
import CreateCampaignDialog from "@/components/CreateCampaignDialog"; // Import the dialog component

const Navbar = () => {
  return (
    <header className="pt-6 px-16 pb-4 bg-[#EDEFFC] border-b">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="hover:underline cursor-pointer">Home</div>
          <div className="hover:underline cursor-pointer">Campaigns</div>
          <div className="hover:underline cursor-pointer">Fonds</div>
        </div>
        <a>Logo</a>
        <div className="flex gap-3 items-center">
          <div className="hover:underline cursor-pointer">Help Center</div>
          <div className="hover:underline cursor-pointer">Connect Wallet</div>
          <CreateCampaignDialog />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
