import React, { useContext } from 'react';
import { GlobalConText } from '../conText/GlopalState';
import {Transaction} from './Transaction';

export const  TransactionList = () => {
  const {transactions} = useContext(GlobalConText);
  
  
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
        
      </ul>
    </>
  )
}
