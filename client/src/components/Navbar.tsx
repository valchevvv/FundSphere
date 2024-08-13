import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAccount, useConnect } from "wagmi";
import { useDisconnect } from "wagmi";

import logo from "@/assets/logo.png";
import CreateCampaignDialog from "./CreateCampaignDialog";

const Navbar = () => {
  const account = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <header className="pt-6 px-16 pb-4 bg-card shadow-lg sticky top-0 z-40">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <Link to="/" className="hover:underline cursor-pointer">
            Home
          </Link>
          <Link to="/campaigns" className="hover:underline cursor-pointer">
            Campaigns
          </Link>
        </div>
        <Link to="/">
          <img src={logo} className="w-9 aspect-square" alt="FundSphere" />
        </Link>
        <div className="flex gap-3 items-center">
          {account.isConnected && <CreateCampaignDialog />}
          <Button onClick={() => disconnect()} className="rounded-full px-8 bg-foreground text-background shadow-2xl transition-colors ease-in-out">Disconnect</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
