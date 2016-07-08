import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import BudgetForm from './BudgetForm.jsx'
import SingleBudget from './SingleBudget.jsx'

Budget = new Mongo.Collection("budget");

export default class Home extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

    this.state = {
      subscription: {
        budgets: Meteor.subscribe("userBudgets")
      }
    };
  }

  componentDidMount(){
  }

  componentWillUnmount() {
    this.state.subscription.budgets.stop();
  }

  budgets() {
   return Budget.find({}).fetch();
 }

  render() {
    return (
      <div id="wrapper">
        <div className="container">
          <BudgetForm/>
            <table className="striped">
              <thead>
                <tr>
                  <th data-field="client">Client</th>
                  <th data-field="job">Job #</th>
                  <th data-field="rate">Rate ($)</th>
                  <th data-field="hours">Est. Hours</th>
                  <th data-field="date">Client Date</th>
                  <th data-field="total">Total ($)</th>
                  <th data-field="delete">Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.budgets().map((budget) => {
                  return <SingleBudget key={budget._id} budget={budget}/>
                })}
              </tbody>
            </table>



        </div>
      </div>
    )
  }
}
