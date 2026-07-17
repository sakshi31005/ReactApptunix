function TodoList({ todos }) {
  return (
    <div className="flex  flex-center justify-center">

      <h2>My Todos: </h2>

      {todos.map((todo) => (
        <div key={todo.id}>

          <h3>{todo.task}</h3>
          <p>Date: {todo.date}</p>

          {todo.attachment && <p>Attachment: {todo.attachment.name}</p>}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
