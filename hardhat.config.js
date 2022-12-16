require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-truffle5");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
/** @type import('hardhat/config').HardhatUserConfig */
const { infuraKey, etherscanApiKey, mnemonic } = require("./secrets.json");

module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: `https://goerli.infura.io/v3/${infuraKey}`,
      accounts: { mnemonic: mnemonic },
    },
  },
  etherscan: {
    apiKey: etherscanApiKey,
  },
  solidity: "0.8.17",
};
