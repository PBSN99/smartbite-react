import UserClass from "./UserClass";
import React from "react";
class About extends React.Component{
  constructor(){
    super();
  }
  componentDidMount(){
   
  }

  render(){
    return (
      <div>
        <h1>About</h1>
        <h2>This is namaste react web series</h2>
        <UserClass name = {"Balu"} job={"Full stack developer"}/>
      </div>
    );
  }
}


export default About;

