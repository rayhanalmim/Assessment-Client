import React, { useState } from 'react';
import { ethers } from 'ethers';

const PaymentForm = ({ provider }: { provider: ethers.providers.Web3Provider | null }) => {
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handlePayment = async () => {
    if (!provider) {
      setStatus('Provider is not connected. Please connect your wallet.');
      return;
    }

    try {
      const network = await provider.getNetwork();
      console.log('Current Network:', network);

      if (network.chainId !== 43113) {
        setStatus('Please connect to the Avalanche Fuji Testnet.');
        return;
      }

      const signer = provider.getSigner();
      const tx = await signer.sendTransaction({
        to: '0x7da2146a6cFFFFe2b6D9eB44999cd19313bc3fcE', // Replace with the recipient's address
        value: ethers.utils.parseEther(amount),
      });

      console.log('Transaction sent:', tx);
      await tx.wait();
      console.log('Transaction confirmed:', tx);
      setStatus('Payment Successful!');
    } catch (error) {
      setStatus('Payment Failed');
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="text"
        placeholder="Amount in AVAX"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 w-80"
      />
      <button
        onClick={handlePayment}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Pay
      </button>
      {status && (
        <p className={`text-lg font-semibold ${status.includes('Successful') ? 'text-green-600' : 'text-red-600'}`}>
          {status}
        </p>
      )}
    </div>
  );
};

export default PaymentForm;
