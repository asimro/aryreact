export const AppReducer = (state, action) => {
  switch (action.type) {

    case 'Set_Web3':
      return {
        ...state, Web3: action.payload
      }

    case 'Set_Accounts':
      return {
        ...state, accounts: action.payload
      }

    case 'Set_Contract':
      return {
        ...state, contract: action.payload
      }

    case 'Set_Name':
      return {
        ...state, name: action.payload
      }

    case 'Set_Symbol':
      return {
        ...state, symbol: action.payload
      }

    case 'Set_TotalSupply':
      return {
        ...state, totalSupply: action.payload
      }

    case 'Set_CurrentSupply':
      return {
        ...state, currentSupply: action.payload
      }

    case 'Set_SalesEndTime':
      return {
        ...state, salesEndTime: action.payload
      }

    case 'Set_SalesStartTime':
      return {
        ...state, salesStartTime: action.payload
      }

    case 'Set_GetBuyRate':
      return {
        ...state, buyRate: action.payload
      }

    case 'Set_FundsRais':
      return {
        ...state, fundRais: action.payload
      }

    case 'Set_BalanceOf':
      return {
        ...state, balanceOf: action.payload
      }

    case 'Set_Events':
      return {
        ...state, getAllEvents: action.payload
      }

    case 'Set_Error':
      return {
        ...state, Error: action.payload
      }

    case 'Set_Trax':
      return {
        ...state, transaction: [action.payload, ...state.transaction]
      }

    default:
      return state;
  }
}