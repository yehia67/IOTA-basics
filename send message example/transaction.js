const Iota = require('@iota/core');

// Create a new instance of the IOTA API object
// Use the `provider` field to specify which node to connect to
const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
});

// Replace this seed with the one that owns the address you used to receive free Devnet tokens 
const seed =
    'IOWPPONJTYHHVRFRGFRWRVQU9VDMQYLEVVEABJPW9PT9F9SYMGIOFDXPYSLGESFTMBSJECQEPLHGWWYRZCMDDUZNCA';

// Create a wrapping function so you can use async/await
const main = async() => {

    // Create a different address from your seed to send the tokens to
    // Be sure that you have never withdrawn from this address before 
    const receivingAddress = await iota.getNewAddress(seed, {
        index: 2,
        total: 1
    });

    // Construct a bundle that transfers the tokens to your new address
    const transfers = [{
        value: 500,
        address: receivingAddress[0],
        tag: 'MYMAGIC'
    }];

    console.log('Sending 500i to ' + receivingAddress);

    try {
        // Construct bundle and convert to trytes
        const trytes = await iota.prepareTransfers(seed, transfers);
        // Send bundle to node.
        const response = await iota.sendTrytes(trytes, 3, 9);

        console.log('Bundle sent');
        response.map(tx => console.log(tx));
    } catch (error) {
        console.log(error);
    }
}

main();