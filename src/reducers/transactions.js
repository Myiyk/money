import {SYNCHRONIZE_TRANSACTIONS} from "../actions/index";

const transactions = (state = [], action) => {
    switch (action.type) {
        case SYNCHRONIZE_TRANSACTIONS:
            let s = state.slice(); // copy array
            let t = action.transactions;

            let lookup = {};
            for (let i = 0, len = s.length; i < len; i++) {
                lookup[s[i].id] = s[i];
            }

            t.forEach((row) => {
                let id = row.column17.value;

                if (lookup[id]) {
                    return; // already exists
                }

                s.push({
                    id,
                    date: row.column0.value,
                    value: row.column1.value,
                    bankAccount: row.column2 === null ? null : row.column2.value,
                    bankCode: row.column3 === null ? null : row.column3.value,
                    constantSymbol: row.column4 === null ? null : row.column4.value,
                    variableSymbol: row.column5 === null ? null : row.column5.value,
                    comment: row.column7 === null ? null : row.column7.value,
                    type: row.column8 === null ? null : row.column8.value,
                    author: row.column9 === null ? null : row.column9.value,
                    bankAccountName: row.column10 === null ? null : row.column10.value,
                    bankName: row.column12 === null ? null : row.column12.value,
                    messageToMe: row.column16 === null ? null : row.column16.value,
                })
            });
            return s;
        default:
            return state;
    }
};

export default transactions