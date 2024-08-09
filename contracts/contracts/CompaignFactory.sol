// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "./Compaign.sol";

contract CompaignFactory {
    Compaign[] public compaigns;

    event CompaignCreated(address compaignAddress, string owner, string name, int targetAmmount, string endDate);
    event DonationMade(address compaignAddress, address donor, uint amount);

    function addCompaign(
        string memory _owner, 
        string memory _name, 
        string memory _description,
        string memory _image,
        int _targetAmmount, 
        string memory _endDate
    ) public {
        Compaign newCompaign = new Compaign(_owner, _name, _description, _image, _targetAmmount, _endDate);
        compaigns.push(newCompaign);
        emit CompaignCreated(address(newCompaign), _owner, _name, _targetAmmount, _endDate);
    }

    function donateToCompaign(uint index) public payable {
        require(index < compaigns.length, "Compaign does not exist");
        Compaign compaign = compaigns[index];
        compaign.donate{value: msg.value}();
        emit DonationMade(address(compaign), msg.sender, msg.value);
    }

    function getCompaigns() public view returns (Compaign[] memory) {
        return compaigns;
    }
}
