import { useContext } from "react";
import { ThemeContext } from "../App";
import RadioButton from "./RadioButton";
import DeleteButton from "./DeleteButton";

const List = ({ todos, setTodos, handleDragStart, handleDrop }) => {
  const { theme } = useContext(ThemeContext);

  const toggleStatus = (id) => {
    setTodos((t) =>
      t.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: todo.status === "Active" ? "Completed" : "Active",
            }
          : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete this to-do?")) {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);

      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    }
  };

  return (
    <>
      {todos.map((todo) => {
        const isCompleted = todo.status === "Completed";

        return (
          <li
            className={`flex items-center border-b border-b-veryDarkGrayishBlue1 pl-5 cursor-pointer transition-transform duration-200 ease-in-out ${
              theme === "dark"
                ? "bg-veryDarkDesaturatedBlue"
                : "bg-veryLightGrayishBlue"
            }`}
            key={todo.id}
            draggable
            onDragStart={(e) => handleDragStart(e, todo.id)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, todo.id)}
          >
            <RadioButton
              onClick={() => toggleStatus(todo.id)}
              className={
                isCompleted
                  ? "h-5 w-5 rounded-full border-2 border-veryDarkGrayishBlue1 bg-checkIcon bg-center bg-purple-600 hover:bg-none bg-no-repeat"
                  : "h-5 w-5 rounded-full border-2 border-veryDarkGrayishBlue1 hover:bg-checkIcon hover:bg-no-repeat hover:bg-center hover:bg-purple-600"
              }
            />
            <div
              className={`w-full p-5 bg-inherit outline-none text-sm flex items-center justify-between ${
                isCompleted
                  ? theme === "dark"
                    ? "text-veryDarkGrayishBlue1 line-through"
                    : "text-lightGrayishBlueLight line-through"
                  : theme === "dark"
                  ? "text-lightGrayishBlueLight"
                  : "text-veryDarkGrayishBlue1"
              }`}
            >
              {todo.name}
              <DeleteButton onClick={() => handleDeleteTodo(todo.id)} />
            </div>
          </li>
        );
      })}
    </>
  );
};

export default List;
