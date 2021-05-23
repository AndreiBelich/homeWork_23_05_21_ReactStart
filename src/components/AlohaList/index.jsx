import Aloha from "../Aloha";

function AlohaList({users, removeUser}){
  const createUserGreetings = (data) => {
    return  data.map(({id, firstName, lastName}) => {
      return <li key={id}>
        <Aloha name={`${firstName} ${lastName}`} userId={id} removeUser={ removeUser }/>
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
