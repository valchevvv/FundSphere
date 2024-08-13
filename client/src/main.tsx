import { Buffer } from "buffer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { WagmiProvider } from "wagmi";

import App from "./App.tsx";
import { config } from "./wagmi.ts";

import "./globals.css";
import ContractProvider from "./contexts/ContractContext.tsx";
import { NotificationProvider } from "./contexts/NotificationContext.tsx";

globalThis.Buffer = Buffer;

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NotificationProvider>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ContractProvider>
            <App />
          </ContractProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </NotificationProvider>
  </React.StrictMode>
);
