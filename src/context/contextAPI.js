import React, { createContext, useReducer, useEffect } from 'react'
import { AppReducer } from './Reducer';
import { loadBlockChain } from './web3call';

const initialState = {
    web3: null,
    accounts: [],
    contract: null,
    name: null,
    symbol: null,
    totalSupply: "",
    currentSupply: "",
    salesEndTime: "",
    salesStartTime: "",
    buyRate: "",
    fundRais: "",
    balanceOf: "",
    getAllEvents: [],
    Error: null,
    transaction: []
}

export const UserContext = createContext(initialState);



export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        loadBlockChain(dispatch)
    }, [])

    return (
        <UserContext.Provider value={[state, dispatch]}>

            {children}
        </UserContext.Provider>
    )
}
