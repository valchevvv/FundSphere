import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useAccount } from "wagmi";
import { useDisconnect } from "wagmi";

import logo from "@/assets/logo.png";
import CreateCampaignDialog from "./CreateCampaignDialog";

const Navbar = () => {
  const account = useAccount();
  const { disconnect } = useDisconnect();
  const { pathname: location } = useLocation();

  const tabs = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Campaigns",
      path: "/campaigns",
    }
  ];

  return (
    <header className="pt-6 px-16 pb-4 bg-card shadow-lg sticky top-0 z-40">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          {tabs.map((tab) => (
            <Link
              to={tab.path}
              key={tab.path}
              className={`relative cursor-pointer px-2 py-1 
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300
                ${location === tab.path ? "after:scale-x-100" : "hover:after:scale-x-100"}
              `}
            >
              {tab.name}
            </Link>
          ))}
        </div>
        <Link to="/">
          <img src={logo} className="w-9 aspect-square" alt="FundSphere" />
        </Link>
        <div className="flex gap-3 items-center">
          {account.isConnected && <CreateCampaignDialog />}
          <Button
            onClick={() => disconnect()}
            className="rounded-full px-8 bg-foreground text-background shadow-2xl transition-colors ease-in-out"
          >
            Disconnect
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
