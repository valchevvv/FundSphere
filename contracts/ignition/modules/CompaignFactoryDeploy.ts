import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CompaignFactoryDeploy = buildModule("LockModule", (m) => {
  const CompaignFactory = m.contract("CompaignFactory");

  return { CompaignFactory };
});

export default CompaignFactoryDeploy;
