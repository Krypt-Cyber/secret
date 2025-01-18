// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MiningSystem {
    IERC20 public token;

    constructor(IERC20 _token) {
        token = _token;
    }

    function mine(uint256 amount) public {
        // Mining logic here
        token.transfer(msg.sender, amount);
    }
}
