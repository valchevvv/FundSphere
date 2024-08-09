import { Button } from "@/components/ui/button";
import one from "@/assets/1.svg";
import two from "@/assets/2.svg";
import three from "@/assets/3.svg";
import CreateCampaignDialog from "@/components/CreateCampaignDialog"; // Import the dialog component
import { useAccount } from "wagmi";

const HomePage = () => {
  const account = useAccount();

  return (
    <section className="mx-24 my-5 flex gap-20">
      <div className="flex flex-col justify-center w-4/12">
        <h3 className="mb-2 font-bold text-3xl">How to start campaign?</h3>
        <p className="mb-2">
          Платформата свързва хората, които имат нужда от помощ с хората, които
          имат нужда да помогнат по модерен и технологичен начин.
        </p>
        {account.isConnected ? (
          <CreateCampaignDialog />
        ) : (
          <Button
            disabled={true}
            className="rounded-full px-8 bg-[#40C783] hover:bg-[#339F69] transition-colors ease-in-out">
            Please connect your wallet to start a campaign
          </Button>
        )}
      </div>
      <div className="flex gap-6 ">
        <div className="px-4 py-8 bg-[#40C783] rounded-2xl w-60 mt-10 h-fit">
          <div className="flex pb-6">
            <img src={one} />
            <h4 className="text-2xl font-bold text-slate-100 ml-2">
              Create campaign
            </h4>
          </div>
          <p className="mb-4">
            Стартирайте своята кампания за минути като следвате стъпките и
            инструкциите на платформата.
          </p>
        </div>
        <div className="px-4 py-8 bg-[#40C783] rounded-2xl w-60 mt-28 h-fit">
          <div className="flex pb-6">
            <img src={two} />
            <h4 className="text-2xl font-bold text-slate-100 ml-2">
              Преглед от администратор & подкрепа
            </h4>
          </div>
          <p className="mb-4">
            Администратор на платформата ще прегледа кампанията ви и ще ви
            помогне да я подготвите по най-добрия начин.
          </p>
        </div>
        <div className="px-4 py-8 bg-[#40C783] rounded-2xl w-60 mb-40 h-fit">
          <div className="flex pb-6">
            <img src={three} />
            <h4 className="text-2xl font-bold text-slate-100 ml-2">
              Споделете & дайте старт
            </h4>
          </div>
          <p className="mb-4">
            Споделете кампанията на приятелите си и получавайте дарения.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
