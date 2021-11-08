import '../App.css';
import React, { useContext } from 'react'
import { UserContext } from '../context/contextAPI';

export const BalanceContract = () => {

    const [{ balance }] = useContext(UserContext);
    const Balance = balance.toLocaleString("en-US");
    return (
        <div>
            <h4 className="balance">Contract Information </h4>
            <h2 className="balance" id="balance"> ${Balance} </h2>

        </div>
    )
}
