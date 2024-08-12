import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAccount, useConnect } from "wagmi";
import { injected } from 'wagmi/connectors';

import logo from "@/assets/logo.png";

const Navbar = () => {
  const account = useAccount();
  const { connect } = useConnect();

  return (
    <header className="pt-6 px-16 pb-4 bg-[#EDEFFC] border-b">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <Link to="/" className="hover:underline cursor-pointer">Home</Link>
          <Link to="/campaigns" className="hover:underline cursor-pointer">Campaigns</Link>
        </div>
        <Link to="/">
          <img src={logo} className="w-9 aspect-square" alt="FundSphere" />
        </Link>
        <div className="flex gap-3 items-center">
          {account.isConnected
            ? (
              <Button
                disabled={true}
                className="rounded-full px-8 bg-[#40C783] hover:bg-[#339F69] transition-colors ease-in-out">
                Connected
              </Button>
            )
            : (
              <Button
                onClick={() => connect({ connector: injected() })}
                className="rounded-full px-8 bg-[#40C783] hover:bg-[#339F69] transition-colors ease-in-out">
                Connect Wallet
              </Button>
            )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
