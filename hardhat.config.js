/**

 * @type import('hardhat/config').HardhatUserConfig

 */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const {PRIVATE_KEY, ROPSTEN_URL, ETHEREUM_MAINNET_URL} = process.env;
module.exports = {
    solidity: "0.8.10",
    defaultNetwork: "ropsten",
    networks: {
        hardhat: {},
        ropsten: {
            url: ROPSTEN_URL,
            accounts: [`0x${PRIVATE_KEY}`],
        },
        mainnet: {
            url: ETHEREUM_MAINNET_URL,
            accounts: [`0x${PRIVATE_KEY}`]
        }
    }
};