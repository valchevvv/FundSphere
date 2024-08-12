import { http, createConfig } from "@wagmi/core";
import { sepolia } from "@wagmi/core/chains";

const alchemyApiKey = import.meta.env.VITE_WC_ALCHEMY_API_KEY;

export const config = createConfig({
  chains: [sepolia],
  transports: {
    [sepolia.id]: http(`https://eth-sepolia.g.alchemy.com/v2/${alchemyApiKey}`),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
