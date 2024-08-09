// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "./Campaign.sol";

contract CampaignFactory {
    Campaign[] public campaigns;

    event CampaignCreated(address campaignAddress, address owner, string name, int targetAmount, string endDate);
    event DonationMade(address campaignAddress, address donor, uint amount);

    function addCampaign(
        string memory _name,
        string memory _description,
        string memory _image,
        int _targetAmount,
        string memory _endDate
    ) public {
        Campaign newCampaign = new Campaign(_name, _description, _image, _targetAmount, _endDate);
        campaigns.push(newCampaign);
        emit CampaignCreated(address(newCampaign), msg.sender, _name, _targetAmount, _endDate);
    }

    function donateToCampaign(uint index) public payable {
        require(index < campaigns.length, "Campaign does not exist");
        Campaign campaign = campaigns[index];
        campaign.donate{value: msg.value}();
        emit DonationMade(address(campaign), msg.sender, msg.value);
    }

    function getCampaigns() public view returns (Campaign[] memory) {
        return campaigns;
    }
}
