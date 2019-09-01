import React, { Component } from 'react';
import Chart from "chart.js";
import classes from "./Graph.module.css";
let myChart;

Chart.defaults.global.defaultFontFamily= "'PT Sans', sans-serif"
Chart.defaults.global.legend.display = false;
Chart.defaults.global.elements.line.tension = 0.5;

export default class LineGraph extends Component {
    chartRef = React.createRef();

    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        const { data, labels, title, fill, bgColor } = this.props;

        if (typeof myChart !== "undefined") myChart.destroy();

        myChart = new Chart(myChartRef, {
            type: "line",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: title,
                        data: data,
                        fill: fill,
                        borderColor: "#6610f2",
                        backgroundColor: bgColor
                    }
                ]
            },
            options: {
                //Customize chart options
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