import React, { useContext } from "react";
import '../App.css';
import { UserContext } from "../context/contextAPI";
import { contractAddress } from "../contract/abiContract"

export const Header = () => {
    const [{ symbol }] = useContext(UserContext);
    let ContractAddress = contractAddress;

    return (
        <div>
            <h1>
                Community {symbol} Token Sale
            </h1>
            <div>
                <a href="https://ropsten.etherscan.io/token/0x6d74c2ca0ff3f1808d05e7d8794e57ac2960ac9c"
                    target="_blank"
                    title="Click here to check your account history">
                    <div className="contract">
                        {ContractAddress}
                    </div>
                </a>
            </div>
        </div>
    )
}