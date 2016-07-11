import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Nav from '../calculator/Nav.jsx';
import Footer from '../calculator/Footer.jsx';
import SideNav from '../calculator/SideNav.jsx';

export const MainLayout = ({content}) => (

    <div className="wrapper-main">

        <SideNav />
    <main>
      {content}
    </main>

    <footer>
        <Footer />
    </footer>


</div>

)
