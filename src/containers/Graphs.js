import {connect} from "react-redux";
import Graphs from "../components/Graphs";

const mapStateToProps = (state) => {
    return {
        transactions: state.transactions,
        token: state.token
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

const GraphContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Graphs);

export default GraphContainer