import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class Footer extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){


 }

  render() {
    return (
      <div className="section black" id="footer">
        <div className="container">
          <div className="row">
            <div className="col l8 offset-l2 s12">


            </div>
            <div className="col l8 offset-l2   s12">

            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container white-text">
          © 2016 Ivan Baena
          </div>
        </div>
      </div>

    )
  }
}
