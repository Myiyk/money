import {connect} from "react-redux";
import {setAccessToken, synchronizeTransactions} from "../actions";
import Transactions from "../components/Transactions";

const mapStateToProps = (state) => {
    return {
        transactions: state.transactions,
        token: state.accessToken
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeToken: (token) => {
            dispatch(setAccessToken(token))
        },
        synchronize: (transactions) => {
            dispatch(synchronizeTransactions(transactions))
        }
    }
};

const TransactionsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Transactions);

export default TransactionsContainer