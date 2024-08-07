// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract Compaign {
    string public owner;
    string public name;
    int public targetAmmount;
    int public currentAmmount = 0;
    int public transactions = 0;
    string public endDate;

    event DonationReceived(address indexed donor, uint amount);

    constructor(
        string memory _owner, 
        string memory _name, 
        int _targetAmmount, 
        string memory _endDate
    ) payable {
        owner = _owner;
        name = _name;
        targetAmmount = _targetAmmount;
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

        currentAmmount += int(msg.value);
        transactions += 1;

        emit DonationReceived(msg.sender, msg.value);
    }
}
