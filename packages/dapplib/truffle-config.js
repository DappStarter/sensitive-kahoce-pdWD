require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net pulp gesture drop sugar slide'; 
let testAccounts = [
"0x8ee2cc7579d120bf6cfecab4c15230a79d75e919f789e0a7b6ba49036f6ce386",
"0x15af5795057d09c10bc2a3f7a36c43accbfb52104b7bec660a97d58a6e037fad",
"0x402a3c9a41b3d0942cf5707e9908657b8c450e177ac20a4ad2921a22b5d54fbc",
"0xa0c08b409dd5eb6bdb96676a713024e012a4703355cb4f1267d5e1cb84523947",
"0xf04eb89a07cdc1636fe1d1887b35a8d6574218ed22aadf39d5c0a3cfb744a467",
"0x5c8c456ad56fbb84214a4a12da6497308f3151b41b3146b705ee04ec9f821053",
"0x86ef1a4df6df942e9bdf626faa5e8aec8e1cbfe4d2629a9803767f8a1c881068",
"0x0341ecc326a2b928047beb360f0f5b9336ea2786b4ce43c179ce969ed604e805",
"0x6e659866d0c8c274c5d805b1505f77cacfb26531f7071d304eaf5bb0fd38c3ca",
"0x070c1491024e17b0dfc9b4482061d08000c9f0eff3d2b378409f6d1f920561c5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

