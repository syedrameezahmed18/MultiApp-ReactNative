export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION';

const addTransaction = (transaction, state) => {
    
    let updatedTransactions = [...state.transactions, transaction]
    return { ...state, transactions: updatedTransactions }
}

const removeTransaction = (transactionId, state) => {
    let allTransactions = [...state.transactions]
    let updatedTransactions = allTransactions.filter((thatTransaction) => thatTransaction.id !== transactionId)
    return { ...state, transactions: updatedTransactions }
}

export const TReducer = (state, action) => {
    switch (action.type) {
        case ADD_TRANSACTION:
            return addTransaction(action.transaction, state)
        case REMOVE_TRANSACTION:
            return removeTransaction(action.transactionId, state)
        default:
            return state
    }
}