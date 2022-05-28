const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // const [owner, addr1, addr2, addr3] = await hre.ethers.getSigners();
  const nftContract = await ethers.getContractFactory("NFT_Contract");

  // VK
  const metadataURL = "ipfs://Qmb44x3w6gdmBJ2qW5FMXHX4UMkqUqjyLXTorpqC6dNXuk/";
  // PVS
  // const metadataURL = "ipfs://QmT8BBMUwj1jHKBhT3wLpgqAjYXVphKjgsupuy4EA3TE8c/";
  // Messi
  // const metadataURL = "ipfs://QmY3LrUc5ULLvT2QeiYXwAE7WBGzjnqpACZYTCVQkS43iM/";

  const deployed_nftContract = await nftContract.deploy(metadataURL);
  await deployed_nftContract.deployed();
  console.log("nftContract Address:", deployed_nftContract.address);
  console.log(
    `Verify with:\n npx hardhat verify --network mumbai ${deployed_nftContract.address} ${metadataURL}`
  );
  // txn = await ethers.nftContract.mint();
  // await txn.wait();
  // const nftMetdaData = await ethers.nftContract.tokenURI(1);
  // console.log(nftMetdaData);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
