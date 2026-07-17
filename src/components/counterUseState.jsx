import { useState } from "react";

function User() {
  const [user, setUser] = useState({
    name: "Puneet",
    age: 27,
  });

  function changeDetails() {
    setUser({
      ...user,
      age: 28,
      name :"sakshi choudhary"
     });
  }
  
  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>

      <button onClick={changeDetails}>
        Change details 
      </button>
    </div>
  );
}

export default User;