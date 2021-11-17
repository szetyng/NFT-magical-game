# Fight the Boss - NFT Magical Game

Repo for the smart contract for an NFT game that can be hosted on the Ethereum blockchain. The game starts with a user selecting 1 of 3 character options available. In order to play, they need to mint an NFT of the character - this NFT belongs to the user's wallet address and is not stored in some centralised server out there. The NFT contains the stats of the character: HP, attack damage etc. 

Once the user has minted the character NFT, they are able to use the character to attack the Big Boss. Be careful, the Boss will fight back! Both the character's and the Boss's HP value will be updated after the attack (Big Boss is not an NFT - its data is stored natively in the contract).

In this repo, the Big Boss is Tom Riddle, and the characters are Wanda Maximoff, Elsa of Arendelle and Eleanor Shellstrop. 

## Dev notes

```shell
# To test the smart contract in a local Ethereum node, spun up by hardhat
npx hardhat run scripts/run.js 

# To deploy the smart contract to the Rinkeby network
npx hardhat run scripts/deploy.js --network rinkeby

# To deploy the smart contract to the Rinkeby network
npx hardhat run scripts/deploy.js --network mainnet

npx hardhat help
```

Characters and Big Boss values can be changed in `scripts/deploy.js` and `scripts/run.js`.

## Links
*Note: the smart contract was deployed on the Rinkeby test network, not the mainnet*
- [OpenSea collection](https://testnets.opensea.io/collection/heroes-hnmhnoon8f)
- [React.js game](https://nft-game-starter-project.szetyngtyng.repl.co/)

## Acknowledgements
This project was built by following the wonderful tutorial by Buildspace!