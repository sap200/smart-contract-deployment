// SPDX-License-Identifier: UNLICENSED
pragma solidity >= 0.8.4;

contract HelloWorld {
    // events
    event updateMessage(string oldStr, string newStr);

    // variables
    string public message;

    // constructor
    constructor(string memory initMessage) {
        message = initMessage;
    }

    // methods
    function update(string memory newMessage) public {
        string memory oldMessage = message;
        message = newMessage;

        emit updateMessage(oldMessage, message);
    }
}