import { useState } from "react";

function TodoForm({ addTodo }) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [attachment, setAttachment] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      task: task,
      date: date,
      attachment: attachment,
    };

    addTodo(newTodo);
    setTask("");
    setDate("");
    setAttachment("");
  }

  return (
    <div className=" w-full  mx-auto rounded-lg px-4 my-8 text-black-600 bg-black-300 border-3">
    
        <form
          onSubmit={handleSubmit}
          className="flex justify-center gap-4 p-20"
        >
          <input
          className="border-2 w-auto"
            type="text"
            placeholder="create your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <input
          className="border-2 w-auto "
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            
          />

          <input
          className="border-2 w-auto cursor-pointer"
          type="file"
          value={files}
          onChange={(e) => setAttachment(e.target.files[0])} />

          <button className="outline-none bg-pink-600 px-3 py-0.5 shrink-0 text-white cursor-pointer"
           type="submit"> + add your task </button>
        </form>
      </div>
  
  );
}

export default TodoForm;
