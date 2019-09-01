import React from 'react';
import './App.css';

//import RefundsList from "./information/refunds.json";
//import RefundsComponent from "./components/Refunds";
import Dashboard from "./components/Dashboard";
import Header from './components/Header';

export default class App extends React.Component {

  //state = {
  //  refundsList: RefundsList
  //}

  render() {
    return <div>
      <Header/>
      <Dashboard/>
    </div>
  }
}
