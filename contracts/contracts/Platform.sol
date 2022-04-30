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

    modifier checkVoter(address[] memory _voters, address _voter) {
        for (uint16 i = 0; i < _voters.length; ++i) {
            if (_voters[i] == _voter) {
                revert("You cannot vote twice for the same post");
            }
        }
        _;
    }

    function addUpvote(address _artist, uint16 _postIndex) public checkVoter(posts[_artist][_postIndex].voters, msg.sender) {
        require(msg.sender != _artist, "You cannot upvote your own post");

        posts[_artist][_postIndex].upvoteCount += 1;
    }

}
