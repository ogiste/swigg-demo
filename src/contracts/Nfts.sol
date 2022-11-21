// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import {LicenseVersion, CantBeEvil} from "@a16z/contracts/licenses/CantBeEvil.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";


contract MintMaster is ERC721, AccessControl, ERC721Burnable, CantBeEvil(LicenseVersion.COMMERCIAL_NO_HATE) {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    constructor() ERC721("MintMasterNFT", "MINTM") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
    }

    function safeMint(address to, uint256 tokenId) public onlyRole(MINTER_ROLE) {
        _safeMint(to, tokenId);
    }

    // The following functions are overrides required by Solidity.

    function supportsInterface(bytes4 interfaceId)
    public
    view
    override(ERC721, AccessControl, CantBeEvil)
    returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}

//contract SwiggNFTMinterERC721Tester is ERC721URIStorage {
//    using Counters for Counters.Counter;
//    Counters.Counter private _tokenIds;
//
//    constructor() ERC721("Swigg Social", "SS"){
//    }
//
//    function mint(string memory tokenURI) public returns(uint256){
//        _tokenIds.increment();
//
//        uint256 newItemId = _tokenIds.current();
//        _safeMint(msg.sender, newItemId);
//        _setTokenURI(newItemId, tokenURI);
//
//        return newItemId;
//    }
//
//
//}
