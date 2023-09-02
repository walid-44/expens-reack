import {createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions : [
      
    ]
}
export  const GlobalConText = createContext(initialState);



export const GlobalProvider = ({children}) => {

  const [state , dispatch] = useReducer(AppReducer, initialState)
  function deleteTransaction(id){
    dispatch({
      type:'DELETE_TRANSACTION',
      payload: id
    });
  }
  function addTransaction(transaction){
    dispatch({
      type:'Add_TRANSACTION',
      payload: transaction
    });
  }
  return ( <GlobalConText.Provider value={{

    transactions : state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}

  </GlobalConText.Provider>

  );
}


