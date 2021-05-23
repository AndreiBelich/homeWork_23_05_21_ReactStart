import {Component} from "react";
import SortedAlohaList from "../SortedAlohaList"

class AlohaDashBoard extends Component{
  constructor(props){
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          firstName: "Leonardo",
          lastName: "Di Caprio"
        },
        {
          id: 2,
          firstName: "John",
          lastName: "Lenon"
        },
        {
          id: 3,
          firstName: "Mickle",
          lastName: "Jordan"
        },
        {
          id: 4,
          firstName: "Vin",
          lastName: "Dizel"
        },
      ]
    } 
  }

  setUser = (users) => {
    this.setState(
      {
        users
      }
    );
  }

  removeUser = (userId) => {
    const {users} = this.state;
    this.setUser(users.filter((user) => user.id !== userId));
  }

  render(){
    const {users} = this.state;
    return (
      <>
        <SortedAlohaList 
          users={users} 
          setUser={this.setUser}
          removeUser={this.removeUser}/>
      </>
    );
  }
}

export default AlohaDashBoard;