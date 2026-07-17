//all components  got deleted
import "./index.css";

// function App() {
//     return (
//         <div>
//             <h1 className="text-3xl font-bold text-blue-500">
//                 Hello Tailwind!
//             </h1>
//             <p className="bg-red-50 ">hello</p>
//         </div>
//    );
// }
// export default App;

//color changer project************8

// import ColorChanger from "./components/ColorChanger";
// function App(){
//     return(
//         <div>
//             <ColorChanger/>
//         </div>
//     )
// }
// export default App;

//  PasswordGenerator App
// import PassGenerate from "./components/PasswordGenerator";
// function App() {
//     return (
//         <div>
//             <PassGenerate />
//         </div>
//     )
// }
// export default App;

import { useState } from "react";
import TodoForm from "./components/Todo/Todoform";
import TodoList from "./components/Todo/Todolist";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
