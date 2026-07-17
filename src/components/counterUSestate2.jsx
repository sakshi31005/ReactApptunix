import { useState } from "react";

function User2() {
  const [user, setUser] = useState({
    id: 0,
    name: "Puneet",
    age: 27,
  });
  const [count, setCount] = useState(0);

  let data = [
    {
      id: 0,
      name: "Puneet",
      age: 27,
    },
    {
      id: 1,
      name: "Test 1",
      age: 28,
    },
    { id: 2, 
    name: "Test 2",
     age: 28 
    },

    { id: 3,
    name: "Test 3",
     age: 28 
    },
    { id: 4,
     name: "Test 4",
     age: 28
     }
  ];

  function changeDetails() {
    const nextCount = count + 1;
    setCount(nextCount);

    const filteredData = data.find((item) => {
      return item.id == nextCount;
    });
    
    if (filteredData) {
      setUser({
        ...user,
        age: filteredData.age,
        name: filteredData.name,
      });
    }
  }
  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>

      <button onClick={changeDetails}>change details </button>
    </div>
  );
}

export default User2;