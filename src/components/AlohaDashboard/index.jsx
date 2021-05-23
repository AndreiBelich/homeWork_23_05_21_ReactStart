import {Component} from "react";
import SortedAlohaList from "../SortedAlohaList"

class AlohaDashBoard extends Component{
  constructor(props){
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          firstName: "Napoleon",
          lastName: "Bonapart"
        },
        {
          id: 2,
          firstName: "Dani",
          lastName: "Filth"
        },
        {
          id: 3,
          firstName: "Natalia",
          lastName: "Oreiro"
        },
        {
          id: 4,
          firstName: "Alexander",
          lastName: "Nevskiy"
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
    this.setUser(users.filter((u) => u.id !== userId));
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