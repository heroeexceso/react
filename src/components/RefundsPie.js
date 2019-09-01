import React from 'react';
import {Chart} from  'chart.js'

export default class RefundPie extends React.Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidUpdate() {
        this.myChart.data.labels = ['A','B','C'];
        //this.props.data.map(d => d.label);
        this.myChart.data.datasets[0].data = 
        //this.props.data.map(d => d.value)
        this.myChart.update();
    }

    componentDidMount() {
        this.myChart = new Chart(this.chartRef.current, {
            type: 'doughnut',
            data: {
                labels: this.props.data.map(d => d.label),
                datasets: [{
                    data: this.props.data.map(d => d.value),
                    backgroundColor: this.props.colors
                }]
            }
        });
    }

    render() {
        return <canvas ref={this.chartRef} />;
    }
}

