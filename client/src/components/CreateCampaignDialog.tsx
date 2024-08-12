import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ContractContext, ICampaign } from "@/context/ContractContext";
import { useContext, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

// Conversion functions
const bigintToNumber = (bigintValue: bigint): number => {
  const precision = 18; // Define your precision
  return Number(bigintValue) / 10 ** precision;
};

const numberToBigInt = (numberValue: number): bigint => {
  const precision = 18; // Define your precision
  return BigInt(Math.round(numberValue * 10 ** precision));
};

const CreateCampaignDialog = () => {
  const { addCampaign, isCreatingCampaign } = useContext(ContractContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [newCampaignData, setNewCampaignData] = useState<Partial<ICampaign>>({
    name: "",
    description: "",
    targetAmount: 0n, // Default to 0n
    image: "",
    endDate: new Date().toISOString().split("T")[0], // Default to today's date
  });

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;

    if (id === "targetAmount") {
      const numericValue = parseFloat(value);
      const targetAmountBigInt = numberToBigInt(numericValue);
      setNewCampaignData((prevData) => ({
        ...prevData,
        targetAmount: targetAmountBigInt,
      }));
    } else {
      setNewCampaignData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const dialogShow = (open?: boolean) => {
    setIsOpen(open || false);
    setNewCampaignData({
      name: "",
      description: "",
      targetAmount: 0n, // Reset to bigint
      image: "",
      endDate: new Date().toISOString().split("T")[0], // Default to today's date
    });
  };

  const submitEvent = () => {
    if (
      !newCampaignData.name ||
      !newCampaignData.description ||
      !newCampaignData.targetAmount ||
      !newCampaignData.endDate
    )
      return;

    // Convert bigint to number for the API call
    const targetAmountNumber = bigintToNumber(
      newCampaignData.targetAmount || 0n
    );

    addCampaign(
      newCampaignData.name,
      newCampaignData.description,
      newCampaignData.image || "",
      targetAmountNumber, // Convert to number
      newCampaignData.endDate,
      () => {
        dialogShow(false); // Close the dialog when campaign is added
      }
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={dialogShow}>
      <DialogTrigger asChild>
        <Button className="rounded-full px-8 bg-[#4088c7] hover:bg-[#2a5a84] shadow-2xl transition-colors ease-in-out">
          Start Campaign
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Campaign</DialogTitle>
          <DialogDescription>
            Fill in the details below to create a new campaign
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={newCampaignData.name || ""}
              onChange={changeHandler}
              placeholder="Enter name"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              value={newCampaignData.description || ""}
              onChange={changeHandler}
              placeholder="Enter description"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="targetAmount" className="text-right">
              Target Amount (ETH)
            </Label>
            <Input
              id="targetAmount"
              type="number"
              min={0}
              step={0.0001}
              value={bigintToNumber(
                newCampaignData.targetAmount || 0n
              ).toString()} // Handle undefined
              onChange={changeHandler}
              placeholder="Enter Amount"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image" className="text-right">
              Image
            </Label>
            <Input
              id="image"
              value={newCampaignData.image || ""}
              onChange={changeHandler}
              placeholder="Enter Image (URL)"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="endDate" className="text-right">
              End Date
            </Label>
            <Input
              id="endDate"
              type="date"
              value={newCampaignData.endDate || ""}
              onChange={changeHandler}
              placeholder="Enter End Date"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={submitEvent}
            className="flex gap-1 items-center"
            disabled={isCreatingCampaign}
          >
            {isCreatingCampaign && <LoadingSpinner />}
            <span>Create</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCampaignDialog;
