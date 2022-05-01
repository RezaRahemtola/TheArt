const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Platform", function () {
  let contract;

  it("Should deploy successfully", async function () {
    const Platform = await ethers.getContractFactory("Platform");
    contract = await Platform.deploy();

    await contract.deployed();
  });

  it("Should add a post", async function () {
    const post = "Hello World";
    await contract.addPost(post);
    await expect(await contract.posts((await ethers.getSigners())[0].address, 0)).to.be.equal([0, "Hello World"]);
  });

});
