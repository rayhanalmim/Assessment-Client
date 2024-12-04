export const AVALANCHE_FUJI_RPC = 'https://api.avax-test.network/ext/bc/C/rpc';
export const RECEIVER_ADDRESS = '0x35ED7A3410228359E9dc53D75d3038B910E33D06';
export const CONTRACT_ADDRESS = 'YOUR_DEPLOYED_CONTRACT_ADDRESS';
export const CONTRACT_ABI = [
  'function buyTicket() public payable',
  'function getPlayers() public view returns (address[])',
  'event LotteryDrawn(address[] winners, uint256 round)',
  'event TicketPurchased(address indexed player, uint256 ticketNumber)',
];
