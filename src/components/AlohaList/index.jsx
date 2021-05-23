import Aloha from "../Aloha";

function AlohaList({users, remove}){
  const createUserGreetings = (data) => {
    return  data.map((user, index) => {
      return <li key={user.id}>
        <Aloha name={`${user.firstName} ${user.lastName}`} userId={user.id} removeHandler={ remove }/>
      </li>
    });
  }
  
  return (
    <ul>
      { createUserGreetings(users) }
    </ul>
  );
}

export default AlohaList;
