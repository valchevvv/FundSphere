import { Button } from "@/components/ui/button";
import { useAccount, useConnect } from "wagmi";
import { injected } from 'wagmi/connectors';

const Navbar = () => {
  const account = useAccount();
  const { connect } = useConnect();

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
