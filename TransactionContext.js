import React, { useState } from 'react';


export const TransactionContext = React.createContext()

export const TransactionProvider =(props)=> {

    const [transactions, setTransactions] = useState([{
        name: 'mike',
        amount: 500
    },
    {
        name:'sie',
        amount: 2000
    }])

    const addRecord = (record) => {
        console.log('hello')
        console.log(record)
        const list = [...transactions, record]
        setTransactions(list)
    }

    console.log(transactions);

    const deleteRecord = (recordId) => {
        const filteredRecord = transactions.filter((record) => record.id !== recordId)
        setTransactions(filteredRecord)
    }

    return (
        <TransactionContext.Provider
            value={'hello'}
        >
            {props.children}
        </TransactionContext.Provider>
    )
}