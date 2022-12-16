// scripts/deploy.js
// https://goerli.etherscan.io/address/0xd892af720039fa556e5514225048dd6547f50fa4#code
async function main() {
  // We get the contract to deploy
  const Box = await ethers.getContractFactory("Box");
  console.log("Deploying Box...");
  const box = await Box.deploy();
  await box.deployed();
  console.log("Box deployed to:", box.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
