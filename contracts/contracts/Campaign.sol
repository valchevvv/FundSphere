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
    int public withdrawnAmount = 0;
    bool public withdrawn = false;

    event DonationReceived(address indexed donor, uint amount);
    event Withdraw(address indexed owner, uint amount); // New Withdraw event

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor(
        address _owner,
        string memory _name,
        string memory _description,
        string memory _image,
        int _targetAmount,
        string memory _endDate
    ) payable {
        owner = _owner;
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

    function withdraw() public onlyOwner returns (uint) {
        require(!withdrawn, "Funds have already been withdrawn");
        require(currentAmount > 0, "No funds to withdraw");

        uint amountToWithdraw = uint(currentAmount);
        withdrawn = true;
        currentAmount = 0;
        withdrawnAmount = int(amountToWithdraw);

        payable(owner).transfer(amountToWithdraw);

        emit Withdraw(owner, amountToWithdraw); // Emit Withdraw event
        return amountToWithdraw;
    }
}
