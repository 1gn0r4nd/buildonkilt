//convert_web3name_to_did.ts
import * as Kilt from '@kiltprotocol/sdk-js'
import axios from 'axios'

async function main() {
  //connect to peregrine network
  let api = await Kilt.connect('wss://peregrine.kilt.io/')

  let apiConfig = Kilt.ConfigService.get('api')
  // Get details from w3n:john_doe
  const encodedJohnDoeDetails = await apiConfig.call.did.queryByWeb3Name('john_doe')
  const {
    document: { uri }
  } = Kilt.Did.linkedInfoFromChain(encodedJohnDoeDetails)
  console.log(`My name is john_doe and this is my DID: "${uri}"`)

  await Kilt.disconnect()

}

main()