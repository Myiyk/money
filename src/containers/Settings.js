import {connect} from "react-redux";
import {setAccessToken} from "../actions";
import Settings from "../components/Settings";

const mapStateToProps = (state) => {
    return {
        token: state.accessToken
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeToken: (token) => {
            dispatch(setAccessToken(token))
        }
    }
};

const SettingsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings);

export default SettingsContainer