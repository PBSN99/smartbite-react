import UserClass from "./UserClass";
import React from "react";
import userContext from "../utils/userContext";
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
        <UserClass name={"Balu"} job={"Full stack developer"} />
        <userContext.Consumer>
          {({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1>}
        </userContext.Consumer>
      </div>
    );
  }
}


export default About;

