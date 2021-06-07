import React, { useState, useContext, useReducer } from 'react'

import TransactionContext from './TransactionContext';
import { TReducer, ADD_TRANSACTION, REMOVE_TRANSACTION } from './reducers'

const GlobalState = props => {

    const [transactionState, dispatch] = useReducer(TReducer, { transactions: [] })

    const addTransaction = transaction => {
        setTimeout(() => {
            dispatch({ type: ADD_TRANSACTION, transaction: transaction })
        }, 500);
    }

    const removeTransaction = transactionId => {
        setTimeout(() => {
            dispatch({ type: REMOVE_TRANSACTION, transactionId: transactionId })
        }, 500);

    }



    return (
        <TransactionContext.Provider
            value={{
                transactions: transactionState.transactions,
                addTransaction: addTransaction,
                removeTransaction: removeTransaction
            }}
        >
            {props.children}
        </TransactionContext.Provider>
    )
}

export default GlobalState