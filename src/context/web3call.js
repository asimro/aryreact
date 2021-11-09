import Web3 from 'web3';
import { contractAddress, abi } from '../contract/abiContract';
import {
    setupWeb3,
    setAccounts,
    setContract,
    setName,
    setSymbol,
    setTotalSupply,
    setCurrentSupply,
    setSalesStartTime,
    setSalesEndTime,
    setGetBuyRate,
    setFundsRais,
    setBalanceOf,
    setEvents,
    setError
} from './Actions';



// let ABI = require("../contract/abiContract.js");
// let ContractAddress = require("../contract/abiContract.js");


export const loadBlockChain = async (dispatch) => {
    try {
        if (Web3.givenProvider) {

            const web3 = new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
            console.log("Web3 provider", web3)
            dispatch(setupWeb3(web3));

            const contract = new web3.eth.Contract(abi, contractAddress);
            console.log('contract', contract);
            dispatch(setContract(contract));

            const Name = await contract.methods.name().call();
            console.log("Name", Name);
            dispatch(setName(Name));

            const Symbol = await contract.methods.symbol().call();
            console.log("Symbol", Symbol);
            dispatch(setSymbol(Symbol));

            const Tsupply = await contract.methods.totalSupply().call();
            const Totalsupply = web3.utils.fromWei(Tsupply, 'ether');
            console.log("Total Supply", Totalsupply);
            dispatch(setTotalSupply(Totalsupply));

            const CSupply = await contract.methods.currentSupply().call();
            const CurrentSupply = web3.utils.fromWei(CSupply, 'ether');
            console.log("Current Supply", CurrentSupply);
            dispatch(setCurrentSupply(CurrentSupply));

            const SalesEndTime = await contract.methods.salesEndTime().call();
            console.log("Sales End Time", SalesEndTime);
            dispatch(setSalesEndTime(SalesEndTime));

            const SalesStartTime = await contract.methods.salesStartTime().call();
            console.log("Sales Start Time", SalesStartTime);
            dispatch(setSalesStartTime(SalesStartTime));

            const GetBuyRate = await contract.methods.getBuyRate().call();
            console.log("Buy Rate", GetBuyRate);
            dispatch(setGetBuyRate(GetBuyRate));

            const FRais = await contract.methods.fundRais().call();
            const FundsRais = web3.utils.fromWei(FRais, 'ether');
            console.log("Total Fund Raised", FundsRais);
            dispatch(setFundsRais(FundsRais));
        }
    }
    catch (error) {
        console.log('Web3 Load_Block_Chian Error', error)
    }
}

export const loadAccountBalance = async (contract, dispatch) => {
    try {

        const web3 = new Web3(Web3.givenProvider);
        await Web3.givenProvider.enable();
        console.log("Web3 provider", web3)

        const accounts = await web3.eth.getAccounts();
        console.log("Account", accounts);
        dispatch(setAccounts(accounts));

        const Balance = await contract.methods.balanceOf(accounts[0]).call();
        const BalanceOf = web3.utils.fromWei(Balance, 'ether');
        console.log("Balance of Account", BalanceOf);
        dispatch(setBalanceOf(BalanceOf));

    }
    catch (error) {
        console.log('Web3 Load_Account_Balance Error', error)
    }
}


export const loadHistory = async (contract, dispatch) => {
    try {
        let getAllEvents = await contract.getPastEvents('AllEvents', {
            fromBlock: 11391455,
            toBlock: "latest"
        });
        console.log("No of Total Events", getAllEvents);
        dispatch(setEvents(getAllEvents));

    }
    catch (error) {
        console.log('Web3 Load_History Error', error)
        dispatch(setError("First Connect Your Wallet"))
    }
}