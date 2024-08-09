// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract Campaign {
    address public owner;
    string public name;
    string public description;
    string public image;
    int public targetAmount;
    int public currentAmount = 0;
    int public transactions = 0;
    string public endDate;

    event DonationReceived(address indexed donor, uint amount);

    constructor(
        string memory _name,
        string memory _description,
        string memory _image,
        int _targetAmount,
        string memory _endDate
    ) payable {
        owner = msg.sender;
        name = _name;
        description = _description;
        image = _image;
        targetAmount = _targetAmount;
        endDate = _endDate;
    }

    fallback() external payable {
        donate();
    }

    receive() external payable {
        donate();
    }

    function donate() public payable {
        require(msg.value > 0, "Donation must be greater than 0");

        currentAmount += int(msg.value);
        transactions += 1;

        emit DonationReceived(msg.sender, msg.value);
    }
}
