# Interacting with the blockchain

## Convert w3n to DID address
Since we are working with humans, we will most likely remember and use w3n addresses instead of the DID address. So the first thing we need is to be able to translate it to a DID Address.
Create a typescript file with the following content:
@[code ts](nuxt/convert_web3name_to_did.ts)
Install the KILT SDK, Typescript, ts-node, and Axios dependencies and run the previous script
@[code bash](./nuxt/kilt.bash)

<img src="/img/build/wallet/w3n-to-did.svg" width="500em" alt="w3n:john_doe"/>

Create a Nuxt project
@[code bash](./nuxt/init.bash)
