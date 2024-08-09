import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Campaigns from "./pages/Campaigns";
import { useContext } from "react";
import { ContractContext } from "./context/ContractContext";

function App() {
  const { compaigns, isLoadingCompaigns } = useContext(ContractContext);
  return (
    <>
      <span>isLoadingCompaigns: {isLoadingCompaigns.toString()}</span>
      <div>
        <span>compaigns:</span>
        <div className="flex flex-col gap-2">
          {compaigns.map((compaign, index) => {
            return (
              <p
                key={index}
                className="flex flex-col bg-black text-white p-3 w-fit"
              >
                <span>
                  owner: <span className="font-bold">{compaign.owner}</span>
                </span>
                <span>
                  name: <span className="font-bold">{compaign.name}</span>
                </span>
                <span>
                  targetAmmount:{" "}
                  <span className="font-bold">
                    {compaign.targetAmmount.toLocaleString()}
                  </span>
                </span>
                <span>
                  currentAmmount:{" "}
                  <span className="font-bold">
                    {compaign.currentAmmount.toLocaleString()} ={" "}
                    <span className="font-bold">
                      {(Number(compaign.currentAmmount) /
                        Number(compaign.targetAmmount)) *
                        100}
                      %
                    </span>
                  </span>
                </span>
                <span>
                  transactions:{" "}
                  <span className="font-bold">
                    {compaign.transactions.toLocaleString()}
                  </span>
                </span>
                <span>
                  endDate: <span className="font-bold">{compaign.endDate}</span>
                </span>
              </p>
            );
          })}
        </div>
      </div>
      <Navbar />
      <HomePage />
      <Campaigns />
    </>
  );
}

export default App;
