import React from "react";
import UserContext from "../../utils/userContext";
class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      user: [],
    }
  }

  async componentDidMount(){
    const user= await fetch("https://randomuser.me/api/");
    const json= await user.json();

    this.setState({
        user: json.results[0]
    })

    // console.log(json.results[0]);
  }

  componentDidUpdate(){
    this.timer=setInterval(()=>{
      console.log("didupdate called");
    },1000);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <img src={this.state.user?.picture?.large}/>
        <h2>{this.state.user?.name?.first}</h2>
        <h2>{this.state.user.email}</h2>
        <h2>{this.state.user.gender}</h2>

        <UserContext.Consumer>
          {({user})=> <h3 className="font-bold text-xl p-10">{user.name} - {user.email}</h3>}
        </UserContext.Consumer>
      </>
    );
  }
}

export default Profile;
