import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CampaignFactoryDeploy = buildModule("LockModule", (m) => {
  const CampaignFactory = m.contract("CampaignFactory");

  return { CampaignFactory: CampaignFactory };
});

export default CampaignFactoryDeploy;
