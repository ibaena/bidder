import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import BudgetForm from './BudgetForm.jsx'

export default class Home extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){
 }

  render() {
    return (
      <div id="wrapper">
        <div className="container">
          <BudgetForm/>
        </div>
      </div>
    )
  }
}
