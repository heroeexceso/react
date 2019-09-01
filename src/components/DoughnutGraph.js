import React, { Component } from 'react';
import Chart from "chart.js";
import classes from "./Graph.module.css";
let myChart;

Chart.defaults.global.defaultFontFamily= "'PT Sans', sans-serif"
Chart.defaults.global.legend.display = true;
Chart.defaults.global.legend.position = "left";
Chart.defaults.global.elements.line.tension = 0.5;

export default class DoughnutGraph extends Component {
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
            type: "doughnut",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: title,
                        data: data,
                        fill: fill,
                        borderColor: '#fff',
                        backgroundColor:backgroundColor
                    }
                ]
            },
            options: {
                //Customize chart options
                cutoutPercentage: 50,
                animation: {
                    animateScale: true
                },
                legend: {
                    display: true,
                    position: 'right',
                    labels: {
                        fontColor: 'black',
                        fontSize: 14,
                        fontStyle: 'normal',
                        boxWidth: 40
                    }
                },
                title: {
                    text: 'Mis Reintegros (Donut)',
                    display: true,
                    position: 'top',
                    fontColor: 'black',
                    fontSize: 20,
                    fontStyle: 'bold'
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
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