require("@nomiclabs/hardhat-ethers")

async function main() {
    // get contract in hello world
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    console.log(HelloWorld)
   
    // pass constructor
    const hello_world = await HelloWorld.deploy("Hello World");
    console.log(hello_world)
    console.log("contract deployed to address: ", hello_world.address)  
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    })