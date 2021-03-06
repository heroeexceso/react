import React, { Component } from 'react';
import Chart from "chart.js";
import classes from "./Graph.module.css";
let myChart;

export default class BarGraph extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        const { data, labels, title, fill, backgroundColor } = this.props;

        if (typeof myChart !== "undefined") myChart.destroy();

        myChart = new Chart(myChartRef, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: title,
                        data: data,
                        fill: fill,
                        borderColor: '#fff',
                        backgroundColor: backgroundColor
                    }
                ]
            },
            options: {
                legend: {
                    display: false,
                },
                title: {
                    text: 'Mis Reintegros (Bar)',
                    display: true,
                    position: 'top',
                    fontColor: 'black',
                    fontSize: 20,
                    fontStyle: 'bold'
                }
            }
        });
    }
    render() {
        return (
            <div className={classes.graphContainer}>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}