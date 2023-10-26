const Blockchain = require ('./blockchain');
const bitcoin = new Blockchain ();

const previousBlockHash = 'c09685e31e57318e569b5fe3ca88ced727a29a0eb9cbea633e05056b4c29';
const currentBlockData = [
    {
        amount: 101,
        sender: 'NNFANSDFHYHTN90A09SNFAS',
        recipient: '555dc5d04e4c11e89b44174d1b876bbf'
    },
    {
        amount: 30,
        sender: 'NNFANSDFHYHTN90A09SNFAS',
        recipient: '555dc5d04e4c11e89b44174d1b876bbf'
    },
    {
        amount: 200,
        sender: 'NNFANSDFHYHTN90A09SNFAS',
        recipient: '555dc5d04e4c11e89b44174d1b876bbf'
    }
];

console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));