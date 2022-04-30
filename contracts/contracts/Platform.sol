//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract Platform {

    address public owner;

    struct Post {
        uint16 upvoteCount;
        string metadata;
        address[] voters;
    }

    mapping (address => Post[]) public posts;

    function addPost(string calldata _metadataHash) public {
        Post memory newPost;
    
        newPost.upvoteCount = 0;
        newPost.metadata = _metadataHash;
        posts[msg.sender].push(newPost);
    }

    function checkVoter(address[] memory _voters, address _voter) internal pure returns (bool) {
        for (uint16 i = 0; i < _voters.length; ++i) {
            if (_voters[i] == _voter) {
                return true;
            }
        }
        return false;
    }

    function addUpvote(address _artist, uint16 _postIndex) public {
        require(msg.sender != _artist, "You cannot upvote your own post");
        require(checkVoter(posts[_artist][_postIndex].voters, msg.sender), "A user can't vote twice for the same post");

        posts[_artist][_postIndex].upvoteCount += 1;
    }

}
