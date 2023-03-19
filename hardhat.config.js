/** @type import('hardhat/config').HardhatUserConfig */

let env = require('dotenv').config();
require('@nomiclabs/hardhat-ethers');
console.log(env.parsed.ETHER_URL)

module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    goerli: {
      url: env.parsed.ETHER_URL,
      accounts:[`0x${env.parsed.PRIVATE_KEY}`]
    }
  }
};
