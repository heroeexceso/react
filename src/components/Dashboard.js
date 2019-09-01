import React from 'react';
//import LineGraph from "./LineGraph";
//import BarGraph from "./BarGraph";
import HorizontalBarGraph from "./HorizontalBarGraph";
import DoughnutBar from "./DoughnutGraph";
import classes from "./Graph.module.css";
import { promotionsLabels, amountData, titleGraph, fillGraph, bgColorGraph } from '../mock/mockdata.js';

export default class Dashboard extends React.Component {
  state = {
      data: amountData,
      labels: promotionsLabels,
      title: titleGraph,
      fill: fillGraph,
      backgroundColor: bgColorGraph
  }

  render() {
      const { data, labels, title, fill, backgroundColor } = this.state;
      return (
        <div className={classes.dashboardContainer}>
            <DoughnutBar
                data={data}
                labels={labels}
                title={title}
                fill={fill}
                backgroundColor={backgroundColor}
            />
            <HorizontalBarGraph
                data={data}
                labels={labels}
                title={title}
                fill={fill}
                backgroundColor={backgroundColor}
            />
        </div>
      )
  }
}