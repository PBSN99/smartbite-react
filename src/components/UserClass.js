import React from "react";

class UserClass extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userInfo: {
        name: "dummy name",
        bio: "dummy bio"
      }
    };
  }
  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/pbsn99");
    const json = await data.json();

    this.setState({
      userInfo: json
    });
    console.log(json);
  }

  componentDidUpdate(){
    console.log("Component did update");
  }

  componentWillUnmount(){
    console.log("Component will unmount");
  }
  render(){
    const {name, bio} = this.state.userInfo;
    return (
      <div className="user-card">
    <h2>Name: {name}</h2>
    <h3>Bio: {bio}</h3>
    <h4>Contact: pbsn99@gmail.com</h4>
   </div>
    );
  }
}

export default UserClass;


/*
 ---- MOUNTING ----

 Constructor(dummy)
 Render(dummy)
      <Html Dummy>
 Component Did Mount
      <Api call>
      <this.setState> --> state variable is updated

----- Update ------

  render(Api data)
  <Html (new Api data)>
  Component Did Udate 
 */
