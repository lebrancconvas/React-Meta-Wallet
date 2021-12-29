const Migrations = artifacts.require("Migrations");
const MyNFT = artifacts.require("MyNFT");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(MyNFT); 
};
