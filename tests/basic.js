const { ethers } = require("hardhat");
require("@nomiclabs/hardhat-ethers");
const { expect } = require("chai");

describe("Comments", function(){
    it("Should add and fetch successfully", async function(){
        const Comments = await ethers.getContractFactory("Comments");
        const comments = await Comments.deploy();
        await comments.deployed();

        expect(await comments.getComments("my-first-chat-post")).to.be.lengthOf(0);
        const tx1 = await comments.addComment("my-first-chat-post", "Official link for mint");
        await tx1.wait();
        expect(await comments.getComments("my-first-chat-post")).to.be.lengthOf(1);
        expect(await comments.getComments("my-second-chat-post")).to.be.lengthOf(0);
        const tx2 = await comments.addComment("my-second-chat-post", "Official link for mint #2");
        await tx2.wait();

        expect(await comments.getComments("my-first-chat-post")).to.be.lengthOf(1);
        expect(await comments.getComments("my-second-chat-post")).to.be.lengthOf(1);

    });
})

describe("SwiggNFTMinterERC721Tester", function(){
    it("Should add and fetch successfully", async function(){
        const NFTMinter = await ethers.getContractFactory("SwiggNFTMinterERC721Tester");
        const nftMinter = await NFTMinter.deploy();
        await nftMinter.deployed();

        expect(await nftMinter.mint("")).to.be.lengthOf(0);
        const tx1 = await nftMinter.mint("");
        await tx1.wait();


    });
})