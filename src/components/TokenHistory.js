import '../App.css';
import React, { useContext } from 'react'
import { UserContext } from '../context/contextAPI';

export const TokenHistory = () => {

    const [{ name,
        symbol,
        totalSupply,
        currentSupply,
        buyRate,
        salesStartTime,
        salesEndTime,
        fundRais
    }] = useContext(UserContext);



    const startDate = new Date(salesStartTime * 1000);
    const StartDate = startDate.toLocaleString("en-UK");



    const endDate = new Date(salesEndTime * 1000);
    const EndDate = endDate.toLocaleString("en-UK");


    return (
        <div >
            <div>
                <h1>Token Updates</h1>
            </div>

            <div className="token_container">
                <div>
                    <h4>
                        Token Name :
                    </h4>
                    <h4>
                        Token Symbol :
                    </h4>
                    <h4>
                        Total Supply :
                    </h4>
                    <h4>
                        Current Supply :
                    </h4>
                    <h4>
                        Buy Rate :
                    </h4>
                    <h4>
                        Sales Start :
                    </h4>
                    <h4>
                        Sales End :
                    </h4>
                    <h4>
                        Funds Raised :
                    </h4>

                </div>

                <div>
                    <h4>
                        {name}
                    </h4>
                    <h4>
                        {symbol}
                    </h4>
                    <h4>
                        {totalSupply}
                    </h4>
                    <h4>
                        {currentSupply}
                    </h4>
                    <h4>
                        {buyRate + " "} {symbol} per Ether
                    </h4>
                    <h4>
                        {salesStartTime > 0 ? StartDate : ""}
                    </h4>
                    <h4>
                        {salesEndTime > 0 ? EndDate : ""}
                    </h4>
                    <h4>
                        {fundRais}
                    </h4>
                </div>

            </div>

        </div>
    )
}
