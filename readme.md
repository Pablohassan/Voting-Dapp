Votting-Dapp

Velcome to this voting Dapp

this is basic app using truffle.js framework for voting constract with solidity contracts.

Initialize the project Install the truffle framework npm install -g truffle Install the ganache gui or cli npm install -g ganache-cli git clone https://github.com/Pablohassan/Voting-Dapp && cd truffle && npm install then cd .. && cd client npm install In the background, simply run ganache-cli, the accounts/private keys will be generated and an in memory ETH blockchain will start.

Deploy Contracts The deploy methods have been added to /migrations/ and will be run in the order specified. To deploy (run a migration), from project root, run tuffle migrate. If making changes to existing contracts, like adding an additional struct to a function that's been deployed, you'll need to run truffle migrate -reset for it work properly. Start Server npm run start from project root will open localhost:3000.