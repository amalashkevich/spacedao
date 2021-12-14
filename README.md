# Space DAO


## Installation

```shell
    npm i
    cp .env-example .env
```

## Configuration

Adjust the values in the `.env` file:

- PRIVATE_KEY 
- ROPSTEN_URL
- ETHEREUM_MAINNET_URL


## Deploy

Run the script with the following command:

```shell
    npx hardhat run scripts/deploy.js --network ropsten
```

After it works with the test net, run it with the mainnet:

```shell
    npx hardhat run scripts/deploy.js --network mainnet
```
