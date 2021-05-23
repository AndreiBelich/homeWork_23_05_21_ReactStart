import {Component} from "react";
import AlohaList from "../AlohaList";

class SortedAlohaList extends Component{
  constructor(props){
    super(props);
    this.state = {
      isDirectSort: true
    };
  }

  sortUsers = () => {
    const { isDirectSort } = this.state;
    const { users, setUser } = this.props;
    const usersCopy = [...users];
    usersCopy.sort((a, b) => isDirectSort ? a.id - b.id : b.id - a.id);
    setUser(usersCopy);
    this.setState({
      isDirectSort: !isDirectSort
    });
  }

  render(){
    const { users, removeUser } = this.props;
    return (
      <>
        <AlohaList users={users} removeUser={removeUser} />
        <button onClick={this.sortUsers}>Change Sort Type</button>
      </>
    );
  }
}

export default SortedAlohaList;
