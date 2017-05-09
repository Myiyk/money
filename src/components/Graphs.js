import React, {Component} from "react";
import {Card, CardText, CardTitle} from "material-ui";
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

class Graphs extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let value = 0;

        let data = this.props.transactions.map((t) => {
            value += t.value;
            return {
                date: t.date,
                value: Math.round(value),
                diff: t.value
            }
        });

        return <Card>
            <CardTitle title="Graphs"/>
            <CardText>
                <ResponsiveContainer width={'100%'} height={300} maxHeight={300}>
                    <LineChart data={data}>
                        <Line type="monotone" dataKey="value" stroke="red" unit=" Kč" isAnimationActive={false}/>
                        <Line type="monotone" dataKey="diff" stroke="green" unit=" Kč" isAnimationActive={false}/>
                        <XAxis dataKey="date"/>
                        <YAxis/>
                        <Tooltip/>
                    </LineChart>
                </ResponsiveContainer>
            </CardText>
        </Card>;
    }
}

export default Graphs;