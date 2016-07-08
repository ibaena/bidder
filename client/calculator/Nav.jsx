import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import AccountsUI from './AccountsUi.jsx';

export default class Home extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){
 }

  render() {
    return (

        <nav >
          <div className="nav-wrapper black">
            <a href="#" className="brand-logo">VCG Calculator</a>
            <div id="login" className="right">
              <AccountsUI />
            </div>
          </div>
        </nav>


    )
  }
}
