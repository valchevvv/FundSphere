import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useContext } from "react";
import { ContractContext } from "./context/ContractContext";
import { Button } from "./components/ui/button";
import { useConnect } from "wagmi";
import { injected } from 'wagmi/connectors';
import Campaigns from "./pages/Campaigns";

const App = () => {
  const { connect } = useConnect();
  const { isProviderAvailable, isWalletConnected } = useContext(ContractContext);

  if (!isProviderAvailable) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#40C783] font-bold text-2xl">
        Ethereum provider is not available
      </div>
    );
  }

  if (!isWalletConnected) {
    return (
      <div className="flex flex-col gap-6 h-screen justify-center items-center">
        <span className="text-2xl font-semibold">You need to connect your wallet to use this app</span>
        <Button
          onClick={() => connect({ connector: injected() })}
          className="rounded-full px-8 bg-[#40C783] hover:bg-[#339F69] transition-colors ease-in-out"
        >
          Connect Wallet
        </Button>
      </div>
    );
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/campaigns" element={<Campaigns />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
