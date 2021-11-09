import '../App.css';
import React, { useContext } from 'react'
import { UserContext } from '../context/contextAPI';
import { loadAccountBalance, loadBlockChain } from '../context/web3call';

export const Balance = () => {

    const [{ contract, accounts, balanceOf }, dispatch] = useContext(UserContext);
    const Balance = balanceOf;
    const acc = accounts[0];

    return (
        <div>
            <h1>Cusotmer Account Details  </h1>
            <h4 className="balance"> Account : &emsp; &emsp; &emsp; &emsp; &emsp;
                <a href="https://ropsten.etherscan.io/token/0x6d74c2ca0ff3f1808d05e7d8794e57ac2960ac9c?a="
                    target="_blank"
                    title="Click here to check your account history">
                    {accounts[0] > 0 ? (acc.substr(0, 6)) + "********" + (acc.substr(38, 4)) : " "}
                </a>
            </h4>
            <h4 className="balance">Token Balance :&emsp;&emsp; &emsp; {Balance} </h4>

            <button className="btnweb3" onClick={() => {
                loadAccountBalance(contract, dispatch);
                loadBlockChain(dispatch)
            }
            }> Connect Your Wallet
                <br />
            </button>
        </div>
    )
}
