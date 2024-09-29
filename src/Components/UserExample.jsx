import { useState } from "react";

//Hook Examples

const UserExample = () => {
  // const [firstname, setFirstname] = useState("Syed");
  // const [lastname, setLastname] = useState("Uzair");

  const[User,setUser] = useState({
    firstname:"Syed",
    lastname:"Uzair",
    email:"s.uzair_ullah@hotmail.com"
  });

  function UpdateValues(){
      // setFirstname('Test')
      // setLastname('Test1')
      setUser({
          firstname:"Test",
          lastname:"Test",
          email:"test@gmail.com"
      })
  }

  const _element = (
    <div>
      <h2>User Credentials</h2>
      <h4>Firstname: {User.firstname}</h4>
      <h4>Lastname: {User.lastname}</h4>
      <h4>Email: {User.email}</h4>
      <button onClick={UpdateValues}>Update</button>
    </div>
  );
  return _element;
};

export default UserExample;
