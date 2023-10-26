const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();


const bc1 = {
    "chain": [
        {
            "index": 1,
            "timestamp": 1653610565578,
            "transactions": [],
            "nonce": 100,
            "hash": "0",
            "previousBlockHash": "0"
        },
        {
            "index": 2,
            "timestamp": 1653610634747,
            "transactions": [],
            "nonce": 18140,
            "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
            "previousBlockHash": "0"
        },
        {
            "index": 3,
            "timestamp": 1653610641319,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "331602a0dd5211eca95edb7621459651",
                    "transactionId": "5c540630dd5211eca95edb7621459651"
                }
            ],
            "nonce": 90124,
            "hash": "0000b591152f53f8034795015d3159087938f5298ddb05becba3f045d5534",
            "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
        }
    ],
    "pendingTransactions": [
        {
            "amount": 12.5,
            "sender": "00",
            "recipient": "331602a0dd5211eca95edb7621459651",
            "transactionId": "603b7990dd5211eca95edb7621459651"
        }
    ],
    "currentNodeUrl": "http://localhost:3002",
    "networkNodes": [
        "http://localhost:3001"
    ]
};




console.log('VALID: ', bitcoin.chainIsValid(bc1.chain));









