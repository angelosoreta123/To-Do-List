import { useEffect, useState } from "react";
import TodoData from "./TodoData";
import TodoInput from "./TodoInput";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <div className="-mt-8 w-full px-7 flex justify-center flex-col items-center gap-8">
      <TodoInput
        value={newTodo}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoData todos={todos} setTodos={setTodos} />
      <p className="text-center text-veryDarkGrayishBlue1">
        Drag and drop to reorder list
      </p>
    </div>
  );
};

export default TodoList;
