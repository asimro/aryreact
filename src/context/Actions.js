// Actions
export const setupWeb3 = (web3) => {
    return {
        type: 'Setup_Web3',
        payload: web3
    };
}

export const setAccounts = (accounts) => {
    return {
        type: 'Set_Accounts',
        payload: accounts
    };
}

export const setContract = (contract) => {
    return {
        type: 'Set_Contract',
        payload: contract
    };
}

export const setName = (Name) => {
    return {
        type: 'Set_Name',
        payload: Name
    };
}

export const setSymbol = (Symbol) => {
    return {
        type: 'Set_Symbol',
        payload: Symbol
    };
}

export const setTotalSupply = (Totalsupply) => {
    return {
        type: 'Set_TotalSupply',
        payload: Totalsupply
    };
}

export const setCurrentSupply = (CurrentSupply) => {
    return {
        type: 'Set_CurrentSupply',
        payload: CurrentSupply
    };
}

export const setSalesEndTime = (SalesEndTime) => {
    return {
        type: 'Set_SalesEndTime',
        payload: SalesEndTime
    };
}

export const setSalesStartTime = (SalesStartTime) => {
    return {
        type: 'Set_SalesStartTime',
        payload: SalesStartTime
    };
}

export const setGetBuyRate = (GetBuyRate) => {
    return {
        type: 'Set_GetBuyRate',
        payload: GetBuyRate
    };
}

export const setFundsRais = (FundsRais) => {
    return {
        type: 'Set_FundsRais',
        payload: FundsRais
    };
}


export const setBalanceOf = (BalanceOf) => {
    return {
        type: 'Set_BalanceOf',
        payload: BalanceOf
    };
}

export const setEvents = (getAllEvents) => {
    return {
        type: 'Set_Events',
        payload: getAllEvents
    };
}

export const setError = (Error) => {
    return {
        type: 'Set_Error',
        payload: Error
    };
}

export const setTrax = (transactions) => {
    return {
        type: 'Set_Trax',
        payload: transactions
    };
}
