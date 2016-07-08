import React, {Component} from 'react';

export default class BudgetForm extends Component {

  submitForm(event){
    event.preventDefault();
    let client = (this.refs.client.value);
    let hours = (this.refs.hours.value);
    let rate = (this.refs.rate.value);
    let job = (this.refs.job.value);
    let dueDate = (this.refs.dueDate.value);



    if (client) {
      Meteor.call('addBudget', {client: client, job: job, rate: rate, hours: hours, dueDate: dueDate}, () => {
        if (!Meteor.userId()) {
          Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o');
        } else {
          this.refs.client.value = "";
          this.refs.hours.value = "";
          this.refs.rate.value = "";
          this.refs.job.value = "";
          this.refs.dueDate.value = "";
        }
      });
    }
      //console.log(client, job, hours, rate, dueDate);
  }



  render() {
    return (
      <div className="row">
            <div className="card col l12 m12 s12" id="calcCard">
              <form className="" onSubmit={this.submitForm.bind(this)}>

                <div className="input-field col l2 m2 s12" id="client-box">
                  <input  id="client" type="text" placeholder="Client"  ref="client" required />
                </div>

                <div className="input-field col l2 m2 s12" id="job-box">
                  <input  id="job" type="text" placeholder="Job"  ref="job" required />
                </div>

                <div className="input-field col l2 m2 s12" id="rate-box">
                  <input  id="rate" type="text" placeholder="Rate"  ref="rate" required />
                </div>

                <div className="input-field col l2 m2 s12" id="hours-box">
                  <input  id="hours" type="text" placeholder="Total Hours"  ref="hours" required />
                </div>

                <div className="input-field col l2 m2 s12" id="clientDate-box">
                  <input  id="dueDate" type="text" placeholder="Client Date"  ref="dueDate" required />
                </div>

                <div className="input-field col l2 m2 s12" id="btn">
                  <button className="btn waves-effect waves-light black"  type="submit" >Submit
                  </button>
                </div>

              </form>
            </div>
          </div>

    );
  }
}
