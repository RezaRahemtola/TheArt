//SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Nft is ERC721URIStorage, Ownable {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  constructor(string memory name_, string memory symbol_) ERC721(name_, symbol_) {}
 
  function mint(address _receiver, string memory _tokenURI) external onlyOwner returns (uint256) {
    _tokenIds.increment();

    uint256 newNftTokenId = _tokenIds.current();
    _mint(_receiver, newNftTokenId);
    _setTokenURI(newNftTokenId, _tokenURI);

    return newNftTokenId;
  }

}
