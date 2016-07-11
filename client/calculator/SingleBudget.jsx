import React, {Component} from 'react';

export default class BudgetSingle extends Component {

  toggleChecked() {
    Meteor.call('toggleBudget', this.props.budget);
  }
  deleteBudget() {
    Meteor.call('deleteBudget', this.props.budget);
  }
  render(){
    const budgetClass = this.props.budget.complete ? "checked" : "";
    const status = this.props.budget.complete ? <span className="completed">Completed</span>: "";

      console.log(this.props.budget);
    return (


            <tr>
              <td><a href={`/budget/${this.props.budget.job}`}>{this.props.budget.client}</a></td>
              <td>{this.props.budget.job}</td>
              <td>$ {this.props.budget.rate}</td>
              <td>{this.props.budget.hours}</td>
              <td>{this.props.budget.dueDate}</td>
              <td>$ {this.props.budget.rate * this.props.budget.hours}</td>
              <td>
                <a className="btn-floating btn-large waves-effect waves-light red"
                   onClick={this.deleteBudget.bind(this)}>
                  <i className="material-icons">delete</i>
                </a>
              </td>
            </tr>

    )
  }
}
