import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/439da3e426c94adc81f2a8372ae34892",
      accounts: [
        `0x62e1ab6f5840405453904e03ec1ae3ab53193ab95868f8971417affad6d66c86`,
      ],
    },
  },
  etherscan: {
    apiKey: "YD7PAXR5TGQCVBSEMJRQ7S66Z9CGUR3KT1",
  },
};

export default config;
