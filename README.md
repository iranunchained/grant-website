# IranUnchained Grants UI


## Change grant filters

- Add grants to the list in the following format:

```json
{
  bafkreiadbnc2srypktdfzq2nsut36agij4trq6rdtgwqfd4r76eda47eku: { // Copy from the URL, this is the IPFS hash of the grant
    isCompleted: true, # If the grant is completed/funded, the grant will show under Completed category
    isOfficial: false, # True for official IranUnchained grants, (default) false for the rest
    raisedBalance: { # overwrites the balance from thegraph, you can set this for completed grants
      value: "1",
      formatted: "1 ETH",
    },
```

# Network Config

## Goerli Testnet

- Goerli DAO : `0xbe9d6d5775e92e695875e42ab5810b868abde93b`
- Goerli Vault Factory address: `0x594E630efbe8dbd810c168e3878817a4094bB312`
- Goerli subgraph url: `https://api.studio.thegraph.com/query/42161/iranunchained-goerli/v0.0.38`
- DAOHaus: `https://admin.daohaus.fun/#/molochv3/0x5/0xbe9d6d5775e92e695875e42ab5810b868abde93b`



## Mainnet Ethereum
- Mainnet DAO: `0x81db04dfd741a765eae4696643c3bb558e7ac3b4`
- Mainent Vault Factory address: `0x594E630efbe8dbd810c168e3878817a4094bB312`
- Mainnet subgraph url: `https://api.studio.thegraph.com/query/44043/iranunchained-mainnet/v0.0.1`
- DAOHaus: `https://admin.daohaus.fun/#/molochv3/0x1/0x81db04dfd741a765eae4696643c3bb558e7ac3b4`


## Requirements

For development, you will need Node.js and YARN installed on your environment.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v16.13.0

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go to [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

### YARN

This project is using `YARN` for managing dependencies. You can go to [YARN website](https://classic.yarnpkg.com/lang/en/docs/install) to install it for your OS.

## Install

    Clone Repo
    $ cd grants-dao
    $ yarn install

### Configure app

Copy `.env.example` to `.env` then update it with your correct configs.

## Start & watch

    $ yarn dev

## Simple build for production

    $ yarn build



# Configs

- Filtering grants on the homepage: `src/consts/grantConfigs.ts`


# Ack

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
