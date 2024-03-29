import Web3 from 'web3'
import { OpenSeaPort, Network } from 'opensea-js'

// This example won't let you make transactions, only read-only calls:
const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io')

const seaport = new OpenSeaPort(provider, {
  networkName: Network.Main
})

export default seaport
