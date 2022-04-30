require("@nomiclabs/hardhat-waffle");
require("dotenv").config()

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_KEY_TESTNET = process.env.API_KEY_TESTNET;
const API_KEY_MAINET = process.env.API_KEY_MAINET;
const URL_TESNET = process.env.URL_TESTNET;
const URL_MAINET = process.env.URL_MAINET;

console.log(PRIVATE_KEY, API_KEY_MAINET, API_KEY_TESTNET, URL_TESNET, URL_MAINET);

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    matic: {
      url: URL_MAINET + API_KEY_MAINET,
      accounts: [`${PRIVATE_KEY}`]
    },
    mumbai: {
      url: URL_TESNET + API_KEY_TESTNET,
      accounts: [`${PRIVATE_KEY}`]
    }
  }
};
