import React, {Component} from 'react';

export default class BudgetForm extends Component {

  submitForm(event){
    event.preventDefault();
    let name = (this.refs.name.value);
    let hours = (this.refs.hours.value);
    let rate = (this.refs.rate.value);



    if (name) {
      Meteor.call('addBudget', {name: name, hours: hours, rate: rate}, () => {
        if (!Meteor.userId()) {
          Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o');
        } else {
          this.refs.name.value = "";
          this.refs.hours.value = "";
          this.refs.rate.value = "";
        }
      });
    }
      console.log(name, hours, rate);
  }



  render() {
    return (
      <div className="row">
            <div className="card col l12 m12 s12" id="calcCard">
              <form className="" onSubmit={this.submitForm.bind(this)}>

                <div className="input-field col l2 m2 s12" id="name-box">
                  <input  id="name" type="text" placeholder="Project Name"  ref="name" required />
                </div>

                <div className="input-field col l2 m2 s12" id="hours-box">
                  <input  id="hours" type="text" placeholder="Total Hours"  ref="hours" required />
                </div>

                <div className="input-field col l2 m2 s12" id="rate-box">
                  <input  id="rate" type="text" placeholder="Rate"  ref="rate" required />
                </div>

                <div className="input-field col l2 m2 s12" id="btn">
                  <button className="btn waves-effect waves-light black"  type="submit" >Search
                  </button>
                </div>

              </form>
            </div>
          </div>

    );
  }
}
