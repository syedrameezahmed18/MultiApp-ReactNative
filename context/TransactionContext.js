import React from 'react';

export default React.createContext({
    transactions: [],
    addTransaction: transaction => { },
    removeTransaction: transactionId => { }
})