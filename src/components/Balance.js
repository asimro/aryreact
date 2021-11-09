import '../App.css';
import React, { useContext } from 'react'
import { UserContext } from '../context/contextAPI';
import { loadAccountBalance } from '../context/web3call';

export const Balance = () => {

    const [{ contract, accounts, balanceOf }, dispatch] = useContext(UserContext);
    const Balance = balanceOf;
    const acc = accounts[0];

    return (
        <div>
            <h4 className="balance">Account : {
                accounts[0] > 0 ? (acc.substr(0, 6)) + "********" + (acc.substr(38, 4)) : " "
            }</h4>

            <h4 className="balance">Your Balance : {Balance}</h4>

            <button className="btnweb3" onClick={() => loadAccountBalance(contract, dispatch)}>Connect Your Wallet
                <br />

            </button>


        </div>
    )
}
