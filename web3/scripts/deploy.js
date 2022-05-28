const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const metadataURL = "ipfs://QmQHMEGnA253SCFt7p9guJRZ9DvJskKLLPaoRSULzTYKnb/";
  const nftContract = await ethers.getContractFactory("NFT_Contract");
  const deployed_nftContract = await nftContract.deploy(metadataURL);
  await deployed_nftContract.deployed();
  console.log("nftContract Address:", deployed_nftContract.address);
  console.log(
    `Verify with:\n npx hardhat verify --network mumbai ${deployed_nftContract.address} ${metadataURL}`
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
