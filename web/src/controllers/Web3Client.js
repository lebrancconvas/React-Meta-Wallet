import Web3 from 'web3';
import NFTContractBuild from 'contracts/MyNFT';

let selectedAccount;
let nftContract;
let isInitialized = false;
let accounts;

export const init = async() => {

    let provider = window.ethereum;

    const web3 = new Web3(provider);

    if (typeof provider !== undefined) {
        try {
            accounts = await provider.request({ method: 'eth_requestAccounts' });
            selectedAccount = await accounts[0];
            console.log(`Selected Account is ${selectedAccount}`);
        } catch (err) {
            console.log(err);
        }

        window.ethereum.on('accountsChanged', accounts => {
            selectedAccount = accounts[0];
            console.log(`Selected Account is changed to ${selectedAccount}`);
        })

        const networkID = await web3.eth.net.getId();
        const deployedNetwork = NFTContractBuild.networks[networkID];
        nftContract = new web3.eth.Contract(NFTContractBuild.abi, deployedNetwork.address);
    }

    isInitialized = true;
};

export const mintToken = async() => {
    if (!isInitialized) {
        await init();
    }
    return nftContract.methods
        .mint(selectedAccount)
        .send({ from: selectedAccount });
}