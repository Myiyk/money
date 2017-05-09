import React, {Component} from "react";
import {Card, CardText, CardTitle, TextField} from "material-ui";
import PropTypes from "prop-types";

class Settings extends Component {

    constructor(props) {
        super(props);
        this.state = {token: props.token};
    }

    onChangeToken(e) {
        let token = e.target.value;
        if (token.length === 64) {
            this.props.changeToken(token);
        }

        this.setState({
            token
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.token !== nextProps.token) {
            this.setState({token: nextProps.token});
        }
    }

    render() {
        let accessTokenError = null;
        if (this.state.token.length !== 64) {
            accessTokenError = "Access token must have 64 characters, now has " + this.state.token.length + " characters.";
        }

        return <Card>
            <CardTitle title="Access token"/>
            <CardText>
                <TextField
                    floatingLabelText="Your access token"
                    fullWidth={true}
                    errorText={accessTokenError}
                    value={this.state.token}
                    onChange={(e) => this.onChangeToken(e)}
                />
            </CardText>
        </Card>;
    }
}

Settings.propTypes = {
    token: PropTypes.string.isRequired,
};

export default Settings;