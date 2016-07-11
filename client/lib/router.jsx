import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'react-mounter';


import {MainLayout} from '../layouts/main-layout.jsx';
import Home from '../calculator/Home.jsx';
import Git from '../calculator/Git.jsx';



FlowRouter.route('/', {
  action(){
    mount(MainLayout, {content:(<Home />)});
  }
});
FlowRouter.route('/bitbucket', {
  action(){
    mount(MainLayout, {content:(<Git />)});
  }
});
