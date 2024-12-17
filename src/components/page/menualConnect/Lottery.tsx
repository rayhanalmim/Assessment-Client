// import React, { useState, useEffect } from 'react';
// import { ethers } from 'ethers';
// import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../utils/constants';

// const Lottery = ({ provider }: { provider: any }) => {
//   const [players, setPlayers] = useState<string[]>([]);
//   const [status, setStatus] = useState<string | null>(null);

//   useEffect(() => {
//     if (!provider) return;

//     const fetchPlayers = async () => {
//       const signer = provider.getSigner();
//       const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
//       const playersList = await contract.getPlayers();
//       setPlayers(playersList);
//     };

//     fetchPlayers();
//   }, [provider]);

//   const buyTicket = async () => {
//     try {
//       const signer = provider.getSigner();
//       const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

//       const tx = await contract.buyTicket({ value: ethers.utils.parseEther('1') });
//       await tx.wait();

//       setStatus('Ticket purchased successfully!');
//     } catch (error) {
//       console.error(error);
//       setStatus('Transaction failed. Please try again.');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center space-y-4">
//       <button
//         onClick={buyTicket}
//         className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//       >
//         Buy Lottery Ticket
//       </button>
//       {status && (
//         <p className={`text-lg font-semibold ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
//           {status}
//         </p>
//       )}
//       <div>
//         <h3 className="font-bold">Players:</h3>
//         {players.map((player, index) => (
//           <p key={index}>{player}</p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Lottery;
