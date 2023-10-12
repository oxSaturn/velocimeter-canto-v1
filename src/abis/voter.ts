export const abi = [
    {
        "type": "constructor",
        "stateMutability": "nonpayable",
        "inputs": [
            {
                "type": "address",
                "name": "__ve",
                "internalType": "address"
            },
            {
                "type": "address",
                "name": "_factory",
                "internalType": "address"
            },
            {
                "type": "address",
                "name": "_gauges",
                "internalType": "address"
            },
            {
                "type": "address",
                "name": "_bribes",
                "internalType": "address"
            },
            {
                "type": "address",
                "name": "_wrappedxbribefactory",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "event",
        "name": "Abstained",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "weight",
                "internalType": "uint256",
                "indexed": false
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Attach",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "internalType": "address",
                "indexed": true
            },
            {
                "type": "address",
                "name": "gauge",
                "internalType": "address",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256",
                "indexed": false
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Deposit",
        "inputs": [
            {
                "type": "address",
                "name": "lp",
                "internalType": "address",
                "indexed": true
            },
            {
                "type": "address",
                "name": "gauge",
                "internalType": "address",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amount",
                "internalType": "uint256",
                "indexed": false
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Detach",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "internalType": "address",
                "indexed": true
            },
            {
                "type": "address",
                "name": "gauge",
                "internalType": "address",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256",
                "indexed": false
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "DistributeReward",
        "inputs": [
            {
                "type": "address",
                "name": "sender",
                "internalType": "address",
                "indexed": true
            },
            {
                "type": "address",
                "name": "gauge",
                "internalType": "address",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "internalType": "uint256",
                "indexed": false
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "GaugeCreated",
        "inputs": [
            {
                "type": "address",
                "name": "gauge",
                "internalType": "address",
                "indexed": true
            },
            {
                "type": "address",
                "name": "creator",
                "internalType": "address",
                "indexed": false
            },
            {
                "type": "address",
                "name": "internal_bribe",
                "internalType": "address",
                "indexed": false
            },
            {
                "type": "address",
                "name": "external_bribe",
                "internalType": "address",
                "indexed": true
            },
            {
                "type": "address",
                "name": "wxbribe",
                "internalType": "address",
                "indexed": false
            },
            {
                "type": "address",
                "name": "pool",
                "internalType": "address",
                "indexed": true
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "GaugeKilled",
        "inputs": [
            {
                "type": "address",
                "name": "gauge",
                "internalType": "address",
                "indexed": true
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "GaugeRevived",
        "inputs": [
            {
                "type": "address",
                "name": "gauge",
                "internalType": "address",
                "indexed": true
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "NotifyReward",
        "inputs": [
            {
                "type": "address",
                "name": "sender",
                "internalType": "address",
                "indexed": true
            },
            {
                "type": "address",
                "name": "reward",
                "internalType": "address",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "amount",
                "internalType": "uint256",
                "indexed": false
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Voted",
        "inputs": [
            {
                "type": "address",
                "name": "voter",
                "internalType": "address",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "weight",
                "internalType": "uint256",
                "indexed": false
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Whitelisted",
        "inputs": [
            {
                "type": "address",
                "name": "whitelister",
                "internalType": "address",
                "indexed": true
            },
            {
                "type": "address",
                "name": "token",
                "internalType": "address",
                "indexed": true
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Withdraw",
        "inputs": [
            {
                "type": "address",
                "name": "lp",
                "internalType": "address",
                "indexed": true
            },
            {
                "type": "address",
                "name": "gauge",
                "internalType": "address",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "amount",
                "internalType": "uint256",
                "indexed": false
            }
        ],
        "anonymous": false
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "_ve",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "attachTokenToGauge",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            },
            {
                "type": "address",
                "name": "account",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "bribefactory",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "claimBribes",
        "inputs": [
            {
                "type": "address[]",
                "name": "_bribes",
                "internalType": "address[]"
            },
            {
                "type": "address[][]",
                "name": "_tokens",
                "internalType": "address[][]"
            },
            {
                "type": "uint256",
                "name": "_tokenId",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "claimFees",
        "inputs": [
            {
                "type": "address[]",
                "name": "_fees",
                "internalType": "address[]"
            },
            {
                "type": "address[][]",
                "name": "_tokens",
                "internalType": "address[][]"
            },
            {
                "type": "uint256",
                "name": "_tokenId",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "claimRewards",
        "inputs": [
            {
                "type": "address[]",
                "name": "_gauges",
                "internalType": "address[]"
            },
            {
                "type": "address[][]",
                "name": "_tokens",
                "internalType": "address[][]"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "claimable",
        "inputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "createGauge",
        "inputs": [
            {
                "type": "address",
                "name": "_pool",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "detachTokenFromGauge",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            },
            {
                "type": "address",
                "name": "account",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "distribute",
        "inputs": [
            {
                "type": "address[]",
                "name": "_gauges",
                "internalType": "address[]"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "distribute",
        "inputs": [
            {
                "type": "address",
                "name": "_gauge",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "distribute",
        "inputs": [
            {
                "type": "uint256",
                "name": "start",
                "internalType": "uint256"
            },
            {
                "type": "uint256",
                "name": "finish",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "distribute",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "distributeFees",
        "inputs": [
            {
                "type": "address[]",
                "name": "_gauges",
                "internalType": "address[]"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "distro",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "emergencyCouncil",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "emitDeposit",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            },
            {
                "type": "address",
                "name": "account",
                "internalType": "address"
            },
            {
                "type": "uint256",
                "name": "amount",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "emitWithdraw",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            },
            {
                "type": "address",
                "name": "account",
                "internalType": "address"
            },
            {
                "type": "uint256",
                "name": "amount",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "external_bribes",
        "inputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "factory",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "gaugefactory",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "gauges",
        "inputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "governor",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "initialize",
        "inputs": [
            {
                "type": "address[]",
                "name": "_tokens",
                "internalType": "address[]"
            },
            {
                "type": "address",
                "name": "_minter",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "internal_bribes",
        "inputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ],
        "name": "isAlive",
        "inputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ],
        "name": "isGauge",
        "inputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ],
        "name": "isWhitelisted",
        "inputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "killGauge",
        "inputs": [
            {
                "type": "address",
                "name": "_gauge",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "lastVoted",
        "inputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "length",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "minter",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "notifyRewardAmount",
        "inputs": [
            {
                "type": "uint256",
                "name": "amount",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "poke",
        "inputs": [
            {
                "type": "uint256",
                "name": "_tokenId",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "poolForGauge",
        "inputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "poolVote",
        "inputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            },
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "pools",
        "inputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "reset",
        "inputs": [
            {
                "type": "uint256",
                "name": "_tokenId",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "reviveGauge",
        "inputs": [
            {
                "type": "address",
                "name": "_gauge",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setEmergencyCouncil",
        "inputs": [
            {
                "type": "address",
                "name": "_council",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "setGovernor",
        "inputs": [
            {
                "type": "address",
                "name": "_governor",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "totalWeight",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "updateAll",
        "inputs": []
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "updateFor",
        "inputs": [
            {
                "type": "address[]",
                "name": "_gauges",
                "internalType": "address[]"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "updateForRange",
        "inputs": [
            {
                "type": "uint256",
                "name": "start",
                "internalType": "uint256"
            },
            {
                "type": "uint256",
                "name": "end",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "updateGauge",
        "inputs": [
            {
                "type": "address",
                "name": "_gauge",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "usedWeights",
        "inputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "vote",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "internalType": "uint256"
            },
            {
                "type": "address[]",
                "name": "_poolVote",
                "internalType": "address[]"
            },
            {
                "type": "uint256[]",
                "name": "_weights",
                "internalType": "uint256[]"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "votes",
        "inputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            },
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "name": "weights",
        "inputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "nonpayable",
        "outputs": [],
        "name": "whitelist",
        "inputs": [
            {
                "type": "address",
                "name": "_token",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "function",
        "stateMutability": "view",
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "name": "wrappedxbribefactory",
        "inputs": []
    }
] as const;