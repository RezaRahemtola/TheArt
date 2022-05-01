// You can also use an ENS name for the contract address
const ether = require('ethers');
const daiAddress = "0x5c1E0bA2b58d24EdF500bB8Dd66c5F8138C179D9";
const API_KEY = process.env.API_KEY;
const provider = new ether.providers.JsonRpcProvider('https://polygon-mumbai.g.alchemy.com/v2/Fwh_5myDNlm9L1omEWWVyDMut5juQyTA');

// The ERC-20 Contract ABI, which is a common contract interface
// for tokens (this is the Human-Readable ABI format)
const daiAbi = [
    // Some details about the toke
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_metadataHash",
                "type": "string"
            }
        ],
        "name": "addPost",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_artist",
                "type": "address"
            },
            {
                "internalType": "uint16",
                "name": "_postIndex",
                "type": "uint16"
            }
        ],
        "name": "addUpvote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "posts",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "upvoteCount",
                "type": "uint16"
            },
            {
                "internalType": "string",
                "name": "metadata",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

// The Contract object
const daiContract = new ether.Contract(daiAddress, daiAbi, provider);

(async () => {

    console.log(await daiContract.owner());
    console.log(await daiContract.address);
    console.log(await daiContract.functions);
    console.log(await daiContract.posts());
    console.log(await daiContract.addUpVote());

})();
