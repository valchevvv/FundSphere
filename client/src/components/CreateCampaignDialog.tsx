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
import { ContractContext } from "@/contexts/ContractContext";
import { useContext, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const CreateCampaignDialog = () => {
  const { addCampaign, isCreatingCampaign } = useContext(ContractContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const [formData, setFormData] = useState<{
    name: string;
    description: string;
    targetAmount: string;
    image: string;
    endDate: string;
  }>({
    name: "",
    description: "",
    targetAmount: "0",
    image: "",
    endDate: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      targetAmount: "0",
      image: "",
      endDate: new Date().toISOString().split("T")[0],
    });
  };

  const handleSubmit = () => {
    const { name, description, targetAmount, endDate, image } = formData;

    if (!name || !description || !targetAmount || !endDate) return;

    const targetAmountNumber = parseFloat(targetAmount);

    addCampaign(name, description, image, targetAmountNumber, endDate, () => {
      setIsOpen(false);
      resetForm();
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-full px-8 shadow-2xl transition-colors ease-in-out">
          Start Campaign
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Campaign</DialogTitle>
          <DialogDescription>
            Fill in the details below to create a new campaign.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {["name", "description", "image"].map((field) => (
            <div key={field} className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={field} className="text-right">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </Label>
              <Input
                id={field}
                value={formData[field as keyof typeof formData] || ""}
                onChange={handleChange}
                placeholder={`Enter ${field}`}
                className="col-span-3"
              />
            </div>
          ))}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="targetAmount" className="text-right">
              Target Amount (ETH)
            </Label>
            <Input
              id="targetAmount"
              type="number"
              min={0}
              step={0.0001}
              value={formData.targetAmount}
              onChange={handleChange}
              placeholder="Enter Amount"
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
              value={formData.endDate}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={handleSubmit}
            className="flex gap-1 rounded-lg transition-colors ease-in-out"
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
