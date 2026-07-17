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
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const todosPerPage = 2;

  function addTodo(newTodo) {
    setTodos((prevTodos) => [...prevTodos, newTodo]);

  
    setPage(1);
  }

  const filteredTodos = todos.filter((todo) =>
    todo.task.toLowerCase().includes(search.toLowerCase()),
  ).reverse();


  const totalPages = Math.ceil(filteredTodos.length / todosPerPage);

  const lastIndex = page * todosPerPage;
  const firstIndex = lastIndex - todosPerPage;

  const currentTodos = filteredTodos.slice(firstIndex, lastIndex);

  return (
    <div className="min-h-screen from-pink-100 via-purple-100 to-indigo-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        

        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl">
            My Todo App
          </h1>
        </header>

        <main className="rounded-3xl border border-white/60 bg-white/70 p-4 shadow-2xl backdrop-blur-md sm:p-6 lg:p-8">
          <div className="mb-8">
           

            <div className="relative">
              <input
                id="search"
                type="text"
                placeholder=" Search by task name..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                className="w-full rounded-2xl border border-gray-200 bg-white px-12 py-3.5 text-gray-700 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
              />
            </div>
          </div>

          <TodoForm addTodo={addTodo} />

          <TodoList todos={currentTodos} />

          {/* Pagination */}
          {totalPages > 0 && (
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={() => setPage((prevPage) => prevPage - 1)}
                disabled={page === 1}
                className="w-full rounded-xl bg-gray-800 px-5 py-2.5 font-semibold text-white transition hover:bg-gray-500 disabled:cursor-not-allowed disabled:bg-gray-300 sm:w-auto"
              >
                ← Previous
              </button>

              <span className="rounded-xl bg-pink-100 px-5 py-2.5 font-semibold text-pink-700">
                Page {page} of {totalPages}
              </span>

              <button
                onClick={() => setPage((prevPage) => prevPage + 1)}
                disabled={page === totalPages}
                className="w-full rounded-xl bg-pink-500 px-5 py-2.5 font-semibold text-white transition hover:bg-pink-600 disabled:cursor-not-allowed disabled:bg-gray-300 sm:w-auto"
              >
                Next →
              </button>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-gray-500">
          You have{" "}
          <span className="font-bold text-pink-600">{todos.length}</span> total{" "}
          {todos.length === 1 ? "todo" : "todos"}
        </footer>
      </div>
    </div>
  );
}

export default App;
