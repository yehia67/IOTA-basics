const Iota = require('@iota/core');
const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
});
const prompts = require('prompts');
(async() => {
    const seed = await prompts({
        type: 'text',
        name: 'value',
        message: 'enter your seed to generate addresses',
        validate: value => value.length === 80 ? `string length is less then 81` : true
    });
    for (let index = 0; index < 5; index++) {
        iota.getNewAddress(seed.value)
            .then(address => {
                console.log(address)
            })
            .catch(err => {
                console.log(err)
            })

    }
})();

// Create a new instance of the IOTA API object
// Use the `provider` field to specify which node to connect to