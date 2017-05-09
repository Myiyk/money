import React, {Component} from "react";
import $ from "jquery";
import {RaisedButton, Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui";

class Transactions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            from: '2017-04-01',
            to: '2017-05-01'
        };
    }

    updateApi(params) {
        let url = `https://www.fio.cz/ib_api/rest/periods/${params.token}/${params.from}/${params.to}/transactions.json`;

        $.get(`https://kalita.cz/proxy.php`, {
            url: url,
        }).done((data) => {
            this.props.synchronize(data.accountStatement.transactionList.transaction);
        });
    }

    handleUpdate(event) {
        this.updateApi({
            token: this.props.token,
            from: this.state.from,
            to: this.state.to
        });
    }

    render() {

        let rows = this.props.transactions.map((transaction) => {
            return <TableRow key={transaction.id}>
                <TableRowColumn style={transaction.value < 0 ? {color: "red"} : {}}>{transaction.value}</TableRowColumn>
                <TableRowColumn>{transaction.date}</TableRowColumn>
                <TableRowColumn>{transaction.messageToMe}</TableRowColumn>
            </TableRow>;
        });

        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn colSpan="3">
                            <RaisedButton label="Synchronize" primary={true} onTouchTap={(e) => this.handleUpdate(e)}/>
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn>Value</TableHeaderColumn>
                        <TableHeaderColumn>Date</TableHeaderColumn>
                        <TableHeaderColumn>Message</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows}
                </TableBody>
            </Table>);
    }
}

export default Transactions;