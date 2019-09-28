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
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "success",
          "type": "bool"
        }
      ],
      "name": "authorityLoginSuccessful",
      "type": "event",
      "signature": "0xcd9cdf7b3af6d5972c41c18b83c6c03a621c3cc40c0f86c5dd60310d309b560f"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "success",
          "type": "bool"
        }
      ],
      "name": "officialLoginSuccessful",
      "type": "event",
      "signature": "0xfe29570b6ff2a1d10f9dbee2b38223051a3298800af114888e6fe4f6be9a7dc3"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "success",
          "type": "bool"
        }
      ],
      "name": "receivedGoodsSuccessful",
      "type": "event",
      "signature": "0xeb99bd82cd0d3417600f5f0c1264fbae9ce5fbc1cc81752dd6687d34165af73a"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "success",
          "type": "bool"
        }
      ],
      "name": "addFarmerSuccessful",
      "type": "event",
      "signature": "0xeba5056977074fb836dde90b82ca5002e6da3d5a8ca34a81923b36d70eaeeb3a"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "success",
          "type": "bool"
        }
      ],
      "name": "addOfficialSuccessful",
      "type": "event",
      "signature": "0x5a2908e9dc5bf9b7af347baf4b2b73cc5282f210c2b9ec7cdfa9818639057f61"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_password",
          "type": "string"
        }
      ],
      "name": "ownerLogin",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x95bdfe03"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_password",
          "type": "string"
        }
      ],
      "name": "officialLogin",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x37ed41ad"
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