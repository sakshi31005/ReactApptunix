import { useState } from "react";

function RandomUser() {
  const [user, setUser] = useState({
    id: 0,
    name: "test 3",
    age: 27,
  });
  const [count, setCount] = useState(0);

  let data = [
    {
      id: 0,
      name: "test 3",
      age: 27,
    },
    {
      id: 1,
      name: "Test 1",
      age: 28,
    },
    { id: 2, name: "Test 2", age: 28 },
    { id: 3, name: "Test 37", age: 28 },
    { id: 4, name: "Test 47", age: 28 },
    { id: 5, name: "Test 48", age: 28 },
    { id: 6, name: "Test 49", age: 28 },
    { id: 7, name: "Test 40", age: 28 },
    { id: 8, name: "Test 45", age: 28 },
    { id: 9, name: "Test 44", age: 28 },
    { id: 10, name: "Test 9 ", age: 28 },
  ];

  function changeDetails() {
    const randomPick = Math.floor(Math.random() * data.length);

          setUser(data[randomPick]);

  }


  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>

      <button onClick={changeDetails}>change details </button>
    </div>
  );
}

export default RandomUser;
