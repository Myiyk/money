export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';

export const setAccessToken = (token) => {
    return {
        type: SET_ACCESS_TOKEN,
        token
    }
};

export const SYNCHRONIZE_TRANSACTIONS = 'SYNCHRONIZE_TRANSACTIONS';
export const synchronizeTransactions = (transactions) => {
    return {
        type: SYNCHRONIZE_TRANSACTIONS,
        transactions
    }
};
