import { ethers } from "hardhat";

async function main() {
  
  const [owner] = await ethers.getSigners();
  /*
A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
so nftContract here is a factory for instances of our NFTee contract.
*/
  const nftContract = await ethers.getContractFactory("Fitex");

  // here we deploy the contract
  const deployedNFTContract = await nftContract.deploy("Fitex", "FT7");

  // wait for the contract to deploy
  await deployedNFTContract.deployed();

  // print the address of the deployed contract
  console.log("NFT Contract Address:", deployedNFTContract.address);

  const minting = await deployedNFTContract.safeMint(owner.address, "https://ipfs.io/ipfs/QmR6REQ3c9Uv5zgAVKTLrzAeH4cxrvGYaDXpH78UBToxqC?filename=Hotpot.png");
  console.log(`you have successfully minted ${await minting.wait()}`);}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
