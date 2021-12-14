async function main() {
  const SpaceDAO = await ethers.getContractFactory("SpaceDAO")
  const spaceDAO = await SpaceDAO.deploy()
  console.log("Contract deployed to address:", spaceDAO.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
