// Require the IOTA library
const Iota = require('@iota/core');

// Create a new instance of the IOTA object
// Use the `provider` field to specify which IRI node to connect to
const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
});

const seed =
    'IOWPPONJTYHHVRFRGFRWRVQU9VDMQYLEVVEABJPW9PT9F9SYMGIOFDXPYSLGESFTMBSJECQEPLHGWWYRZ';

// Create an address with index 0 and security level 2
iota.getNewAddress(seed, { index: 0, security: 2 })
    .then(address => console.log(address));