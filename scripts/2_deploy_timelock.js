// deployer for timelock
//const argumentsArray = require('../arguments.js');

async function main() { 

    const [deployer] = await ethers.getSigners();
  
    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );
    
    var delayTime = 150;
    var proposersArray = [];
    var executorsArray = ['0x0000000000000000000000000000000000000000'];
    
  
    const TimelockController = await ethers.getContractFactory('contracts/TimelockController.sol:TimelockController');
    const timelock = await TimelockController.deploy(delayTime, proposersArray, executorsArray);
    await timelock.deployed()
    timelockAddress = timelock.address
    console.log("Timelock Contract deployed at: "+timelockAddress)

  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
