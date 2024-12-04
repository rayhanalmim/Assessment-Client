"use client";
import WalletConnect from "src/components/WalletConnect";
import PaymentForm from "src/components/PaymentForm";
import { useState } from "react";
import { ethers } from "ethers";

export default function Home() {

  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);

  const handleWalletConnect = (connectedProvider: ethers.providers.Web3Provider | null) => {
    setProvider(connectedProvider);
  };


  return (
    <div >
      <h3>hello this in the client side</h3>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold mb-8">Blockchain Payment App</h1>
        <div className="min-h-screen flex flex-col items-center justify-center space-y-8">
          <WalletConnect onWalletConnect={handleWalletConnect} />
          <PaymentForm provider={provider} />
        </div>
      </div>
    </div>
  );
}
