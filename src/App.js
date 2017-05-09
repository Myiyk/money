import React, {Component} from "react";
import AppBar from "material-ui/AppBar";
import "./App.css";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import SettingsIcon from "material-ui/svg-icons/action/settings";
import ListIcon from "material-ui/svg-icons/action/view-list";
import GraphIcon from "material-ui/svg-icons/action/timeline";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

import Settings from "./containers/Settings";
import Transactions from "./containers/Transactions";
import Graphs from "./containers/Graphs";

import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers";

import {persistStore, autoRehydrate} from 'redux-persist'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

let store = createStore(reducers, undefined, autoRehydrate());

persistStore(store);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    render() {
        return (
            <MuiThemeProvider>
                <Provider store={store}>
                    <Router>
                        <div>
                            <AppBar
                                title="Fio"
                                onLeftIconButtonTouchTap={() => this.setState({open: true})}
                                style={{position: 'fixed'}}
                            />

                            <Drawer
                                docked={false}
                                open={this.state.open}
                                onRequestChange={(open) => this.setState({open})}
                            >
                                <AppBar
                                    title="Menu"
                                    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                                    onLeftIconButtonTouchTap={() => this.setState({open: false})}
                                />
                                <MenuItem primaryText="Transactions"
                                          leftIcon={<ListIcon />}
                                          onTouchTap={() => this.setState({open: false})}
                                          containerElement={<Link to="/transactions"/>}/>
                                <MenuItem primaryText="Graphs"
                                          leftIcon={<GraphIcon />}
                                          onTouchTap={() => this.setState({open: false})}
                                          containerElement={<Link to="/graphs"/>}/>
                                <MenuItem primaryText="Settings"
                                          leftIcon={<SettingsIcon />}
                                          onTouchTap={() => this.setState({open: false})}
                                          containerElement={<Link to="/settings"/>}/>
                            </Drawer>

                            <div style={{paddingTop: 64}}>
                                <Route path="/transactions" component={Transactions}/>
                                <Route path="/graphs" component={Graphs}/>
                                <Route path="/settings" component={Settings}/>
                            </div>
                        </div>
                    </Router>
                </Provider>
            </MuiThemeProvider>
        );
    }
}

export default App;
