export const KISAAN_ADDRESS = "0x88A9A29ba10bbEC7B90957b8Ab7D9A49e2Afd552";

export const KISAAN_ABI = [
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_farmerAddress",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "receivedGoods",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xe161b9be"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_farmerAddress",
          "type": "address"
        },
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_password",
          "type": "string"
        }
      ],
      "name": "addFarmer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xe9bf6b4c"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_officialAddress",
          "type": "address"
        },
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_password",
          "type": "string"
        },
        {
          "name": "_isValidator",
          "type": "bool"
        }
      ],
      "name": "addOfficial",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xce855cc5"
    }
  ]