import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import AccountsUI from './AccountsUi.jsx';


export default class SideNav extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){
   $('.button-collapse').sideNav({
    menuWidth: 100,
    edge: 'left',
  }
);

 }

  render() {
    return (
      <nav className="transparent">
        <ul id="" className="right black-text">
          <li className="black-text"><AccountsUI /></li>
        </ul>

        <ul id="slide-out" className="side-nav fixed">
         <li className="center-align side-menu" id="first-menu"><a href="/"><i className="fa fa-user fa-2x" aria-hidden="true"></i></a></li>
         <li className="center-align side-menu"><a href=""><i className="fa fa-cogs fa-2x" aria-hidden="true"></i></a></li>
         <li className="center-align side-menu"><a href=""><i className="fa fa-group fa-2x" aria-hidden="true"></i></a></li>
         <li className="center-align side-menu"><a href="/bitbucket"><i className="fa fa-git fa-2x" aria-hidden="true"></i></a></li>
        </ul>
        <ul className="left">
          <li><a href="#" data-activates="slide-out" className="button-collapse black-text"><i className="fa fa-bars" aria-hidden="true"></i></a></li>

        </ul>

      </nav>
    )
  }
}
