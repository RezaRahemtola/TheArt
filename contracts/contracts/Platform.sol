//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./Nft.sol";

contract Platform is Ownable {

    uint256 public lastUse;
    address[] public creators;

    constructor () {
        lastUse = block.timestamp;
    }

    struct Post {
        uint16 upvoteCount;
        string metadata;
        address[] voters;
    }

    mapping (address => Post[]) public posts;

    function addPost(string calldata _metadataHash) public {
        Post memory _newPost;

        if (posts[msg.sender].length == 0)
            creators.push(msg.sender);
        _newPost.upvoteCount = 0;
        _newPost.metadata = _metadataHash;
        posts[msg.sender].push(_newPost);
    }

    modifier checkVoter(address[] memory _voters, address _voter) {
        for (uint16 i = 0; i < _voters.length; ++i) {
            if (_voters[i] == _voter) {
                revert("You cannot vote twice for the same post");
            }
        }
        _;
    }

    function addUpvote(address _artist, uint16 _postIndex) checkVoter(posts[_artist][_postIndex].voters, msg.sender) public {
        require(msg.sender != _artist, "You cannot upvote your own post");

        posts[_artist][_postIndex].upvoteCount += 1;
    }

    modifier checkLastUse() {
        require(block.timestamp - lastUse > 86400, "You cannot use the platform too often");
        _;
    }

    function removeElement(address _toDelete) internal {
        uint idx = 0;

        for (uint i = 0; i < creators.length; ++i) {
          if (creators[i] == _toDelete) {
            idx = i;
            break;
          }
        }

        for (uint i = idx; i < creators.length-1; i++) {
          creators[i] = creators[i+1];
        }

    }

    function mintNfts(uint256 _nbWinners) onlyOwner public returns (address) {
        Post[] memory _winners = new Post[](_nbWinners);
        address[] memory _addresses = new address[](_nbWinners);
  
        for (uint256 i = 0; i < _nbWinners; ++i) { 
            Post memory max1;
            max1.upvoteCount = 0;
            address maxA = address(0x0);

            for (uint256 j = 0; j < creators.length; ++j) { 
                for (uint256 x = 0; x < posts[creators[j]].length; ++x) {
                    if (posts[creators[j]][x].upvoteCount > max1.upvoteCount) {
                        max1 = posts[creators[j]][x];
                        maxA = creators[j];
                    }
                }   
            }
            removeElement(maxA);
            _winners[i] = max1;
            _addresses[i] = maxA;
        }

        Nft _collection = new Nft("trust", "me");

        for (uint256 i = 0; i < _nbWinners; ++i) {
            _collection.mint(_addresses[i], _winners[i].metadata);
        }
        lastUse = block.timestamp;

        for (uint256 i = 0; i < creators.length; ++i) {
            delete posts[creators[i]];
        }
        delete creators;
        return address(_collection);
    }

}
