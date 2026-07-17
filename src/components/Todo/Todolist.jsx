function TodoList({ todos }) {
  return (
    <div className="w-full max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center text-pink-700 mb-6">
        My Todos
      </h2>

      {todos.length === 0 ? (
        <p className="text-center text-pink-500">No todos added yet.</p>
      ) : (
        <div className="space-y-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="bg-white border border-pink-200 rounded-xl p-5 shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-pink-800">
                {todo.task}
              </h3>

              <p className="text-pink-600 mt-2 ml-4">📅 Date: {todo.date}</p>

              {todo.attachment && (
                <p className="text-pink-600 mt-2">
                  📎 Attachment:{" "}
                  <span className="text-pink-600 font-medium">
                    {todo.attachment.name}
                  </span>
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TodoList;
