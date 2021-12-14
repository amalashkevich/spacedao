/**

 * @type import('hardhat/config').HardhatUserConfig

 */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const {ROPSTEN_URL, PRIVATE_KEY, MUMBAI_URL, POLYGON_URL} = process.env;
module.exports = {
    solidity: "0.8.4",
    defaultNetwork: "ropsten",
    networks: {
        hardhat: {},
        mumbai: {
            url: MUMBAI_URL,
            accounts: [`0x${PRIVATE_KEY}`],
        },
        polygon: {
            url: POLYGON_URL,
            accounts: [`0x${PRIVATE_KEY}`]
        }
    }
};