import React, { useContext } from 'react'
import { GlobalConText } from '../conText/GlopalState'

export const Balanse = () => {
  const {transactions} = useContext(GlobalConText);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  )
}
