require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config({ path: ".env" });

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL || "rinkeby-rpc-url";
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || "mumbai-rpc-url";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "your private key";
const POLYSCAN_API_KEY =
  process.env.POLYSCAN_API_KEY || "Your polyscan API key";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: MUMBAI_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: POLYSCAN_API_KEY,
  },
  solidity: {
    version: "0.8.10",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
