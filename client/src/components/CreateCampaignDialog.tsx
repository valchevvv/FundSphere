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
import { ContractContext, ICompaign } from "@/context/ContractContext";
import { ReactElement, ReactEventHandler, useContext, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const CreateCampaignDialog = () => {
  const { addCompaign, isCreatingCompaign } = useContext(ContractContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [newCompaignData, setNewCompaignData] = useState<Partial<ICompaign>>({
    name: "",
    description: "",
    targetAmmount: 0,
    image: "",
    endDate: Date.now.toString(),
  });

  const changeHandler = (e: any): void => {
    setNewCompaignData({
      ...newCompaignData,
      [e.target.id]: e.target.value,
    });
  };

  const dialogShow = (open?: boolean) => {
    setIsOpen(open || false);
    setNewCompaignData({
      name: "",
      description: "",
      targetAmmount: 0,
      image: "",
      endDate: Date.now.toString(),
    });
  };

  const submitEvent = () => {
    if (
      !newCompaignData.name ||
      !newCompaignData.description ||
      !newCompaignData.targetAmmount ||
      !newCompaignData.endDate
    )
      return;
    addCompaign(
      newCompaignData.name,
      newCompaignData.description,
      newCompaignData.image || "",
      newCompaignData.targetAmmount,
      newCompaignData.endDate,
      dialogShow
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={dialogShow}>
      <DialogTrigger asChild>
        <Button className="rounded-full px-8 bg-[#40C783] hover:bg-[#339F69] transition-colors ease-in-out">
          Start Campaign
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Compaign</DialogTitle>
          <DialogDescription>
            Fill in the details below to create a new compaign
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              value={newCompaignData.name}
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
              value={newCompaignData.description}
              onChange={changeHandler}
              placeholder="Enter description"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="targetAmmount" className="text-right">
              Target Ammount (ETH)
            </Label>
            <Input
              id="targetAmmount"
              type="number"
              min={0}
              step={0.0001}
              value={newCompaignData.targetAmmount}
              onChange={changeHandler}
              placeholder="Enter Ammount"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image" className="text-right">
              Image
            </Label>
            <Input
              id="image"
              value={newCompaignData.image}
              onChange={changeHandler}
              placeholder="Enter Image (URL)"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image" className="text-right">
              End Date
            </Label>
            <Input
              id="endDate"
              type="date"
              value={newCompaignData.endDate}
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
            disabled={isCreatingCompaign}
          >
            {isCreatingCompaign && <LoadingSpinner />}
            <span>Create</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCampaignDialog;
