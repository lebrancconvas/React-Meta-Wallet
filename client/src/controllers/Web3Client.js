import Web3 from 'web3';

let selectedAccount;
const providerURL = process.env.PROVIDER_URL || 'http://localhost:8545';
export const init = () => {
    const web3 = new Web3(providerURL);

    let provider = window.ethereum;

    if (typeof provider !== undefined) {
        provider.request({ method: 'eth_requestAccounts' }).then((accounts) => {
            selectedAccount = accounts[0];
            console.log(`Selected Account is ${selectedAccount}`);
        }).catch(err => {
            console.log(err);
        })

        window.ethereum.on('accountsChanged', accounts => {
            selectedAccount = accounts[0];
            console.log(`Selected Account is changed to ${selectedAccount}`);
        })
    }
};