require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const SEPOLIA_RPC_URL =
  process.env.SEPOLIA_RPC_URL || "https://sepolia.infura.io/v3/";
const GOERLI_RPC_URL =
  process.env.GOERLI_RPC_URL || "https://goerli.infura.io/v3/";
const MUMBAI_RPC_URL =
  process.env.MUMBAI_RPC_URL || "https://polygon-mainnet.infura.io";
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";
const POLYSCAN_API_KEY = process.env.POLYSCAN_API_KEY;

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.18",
      },
      {
        version: "0.8.4",
      },
      {
        version: "0.8.0",
      },
    ],
  },
  etherscan: {
    apiKey: {
      goerli: ETHERSCAN_API_KEY,
      sepolia: ETHERSCAN_API_KEY,
      polygonMumbai: POLYSCAN_API_KEY,
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    mumbai: {
      url: MUMBAI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 80001,
    },
  },
};
