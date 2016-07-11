import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class Git extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

      this.state = {bitbucket: [] };

    }




 componentDidMount(){

   Meteor.call("getRepos",  {}, (error, res) => {
     if(error || res === undefined) {
       console.log("error:", error);
       Bert.alert( 'Something went wrong. Call Ivan!!', 'danger', 'fixed-top', 'fa-frown-o' );
     }else{
       //console.log(res.data);
       this.setState ({bitbucket: res.data.values})
     }
   });
 }


  render() {
    console.log(this.state);
    return (

      <div className="showGit container">
        <p>LIst all repos</p>
        <ul>

          {
            this.state.bitbucket.map((data) => {
              console.log(data);
              return <li key={data.name}>{data.name}</li>
            })
          }

    </ul>
      </div>

    )
  }

}
