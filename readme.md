# Meter Safe Multisig [warringstakes]

The most trusted platform to store digital assets on Meter Network.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
yarn add truffle // recommended usage of -g flag
yarn add ganache-cli // recommended usage of -g flag
yarn add flow-type // recommended usage of -g flag
```

We use [yarn](https://yarnpkg.com) in our infrastacture, so we decided to go with yarn in the README

### Installing and running

A step by step series of examples that tell you have to get a development env running

Install dependencies for the project:

```
yarn install
```

For using the Testnet services:

```
yarn start
```

If you prefer using Mainnet ones:

```
yarn start-mainnet
```

### Building

For Testnet:

```
yarn build
```

For Mainnet:

```
yarn build-mainnet
```

## Running the tests

1. Run `transaction-history-service`

```
git clone https://github.com/sekmet/multisig-transaction-service.git
cd multisig-transaction-service
git checkout develop
docker-compose build
# it comes enabled by default in docker-compose
sudo service postgresql stop
docker-compose up -d
```

Check that the service is running at https://localhost:8000

2. Migrate Safe Contracts:

```
git clone https://github.com/sekmet/multisig-contracts.git
cd safe-contracts
yarn
npx truffle migrate
```

3. Migrate Token Contracts for the tests:
   Inside `safe-react` directory

```
npx truffle migrate
```

4. Run the tests:

```
yarn test
```

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Configuring the app for running on different networks

[Please check the network configuration documentation](./docs/networks.md)

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Thanks for Gnosis Team for providing the Safe contracts.
