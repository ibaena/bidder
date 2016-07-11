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

      <nav className="transparent hide-on-large-only">
        <div className="nav-wrapper">
           <a href="#" data-activates="slide-out" className="button-collapse right black-text" id="burger-mobile"><i className="mdi-navigation-menu"></i></a>
        </div>
      </nav>


    )
  }
}
