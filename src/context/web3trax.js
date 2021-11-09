import { setTrax } from './Actions';
import Web3 from 'web3';

export const AddTransaction = async (accounts, contract, transactions, dispatch) => {

    try {

        const web3 = new Web3(Web3.givenProvider);
        await Web3.givenProvider.enable();

        const sendTransaction = await contract.methods.buyToken(transactions.Description)
            .send({ from: accounts[0], value: (web3.utils.toWei(transactions.Amount, 'ether')) });

        console.log('sendTransaction', sendTransaction);
        dispatch(setTrax(transactions));
    }
    catch (error) {
        console.log('add transaction method error', error)
    }
}