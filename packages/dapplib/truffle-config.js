require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb orange system bird ribbon remind exchange inner produce bridge ghost'; 
let testAccounts = [
"0x87d6a6d595b49d2a2e9569203a2f7813cef9c5f9e72bb0a2140fd84e0faaa34d",
"0x7a011de8567d615bfefbfc273d55b54d409f7eba47b3757e133e749d6501463c",
"0x09a1613fac2a93c64c274301bb1d3dd841bd89b55f50924c4bb503c207995b95",
"0xcc7214d0139d82a33b2816105f9a2fbb52dd35d9719bd07daa977edb24a0a649",
"0xc2aed3e8fd0aee7460c08fcee518eae08f70f403b8886fdc121194bf6c298bd2",
"0x2794c16628f4f257f7646da4f355e20aae5d8ba9ebc080635331ef97e6a923b2",
"0xaf3543891c1e5527c585ef8b2ad731ab424a00b17a473c5359d9bc54781e88e4",
"0x8fe9ce2ca3cd90652971ca8572e956c0b94da61a9fa58d9e236191ad274346ed",
"0x4e3d0fca6bc164e28946de721ed92cb6fc976f79c3c8ddf5bfa29a68ecf5146f",
"0x067b154962dfabcd4aeec3bb93a751e612c65a7f94267fd48dc3a2dc1ecf40cb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

