# JAI KISAAN

## About
Jai Kisaan is an effort to make the best use of the Blockchain Technology to enhance the lives of farmers. We use Blockchain to manage the agricultural supply chain, to help farmers receive all the revenue they are supposed to receive instead of those funds being stolen by middlemen.

## Tech Stack
Solidity, React.js, Truffle Framework, Metamask.

## Pre-Requisites
Ganache, Metamask, Yarn Package Manager(Or NPM).

## Steps to Reproduce
* Clone the repository and run ```truffle compile``` and ```truffle migrate --reset``` in the terminal.
* This should generate an address for the Kisaan Smart Contract. Copy this address and paste it in config.js at KISAAN_ADDRESS.
* Go to build/contracts/Kisaan.json and copy the ABI array and paste it in config.js at KISAAN_ABI.
* Make sure you have Ganache up and running to enable your local blockchain.
* Login to your metamask account and connect it to this local blockchain.
* Run ```yarn start``` or if you prefer npm, ```npm start```.
* Select the first account in metamask and login as Central Authority using the password "password".
* You can import accounts with the help of the private keys available in Ganache and make one of them an Official, login to their account, register another account as Farmer and transfer money to that farmer.


