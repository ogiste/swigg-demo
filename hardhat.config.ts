import * as dotenv from "dotenv";

import {HardhatUserConfig, task} from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";

dotenv.config();
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
const config = {
    solidity: {
        compilers: [
            {
                version: "0.8.13",
            },
            {
                version: "0.8.4",
            },
        ],
    },
    networks: {
        hardhat: {
            chainId: 1337
        },
        matic: {
            url: "https://matic-mumbai.chainstacklabs.com",
            accounts: [process.env.MUMBAI_KEY]
        },
        metis: {
            url: "https://goerli.gateway.metisdevops.link",
            accounts:
                process.env.PRIV_KEY !== undefined ? [process.env.PRIV_KEY] : []
        }
    },
    paths: {
        sources: "./src/contracts",
        tests: "./tests",
        cache: "./cache",
        artifacts: "./src/artifacts"
    },
};

export default config