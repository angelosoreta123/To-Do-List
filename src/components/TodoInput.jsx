import RadioButton from "./RadioButton";
import { useContext } from "react";
import { ThemeContext } from "../App";

const TodoInput = ({ value, newTodo, setTodos, setNewTodo, todos }) => {
  const { theme } = useContext(ThemeContext);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const capitalizedTodo =
        newTodo.charAt(0).toUpperCase() + newTodo.slice(1);

      const newTodoObj = {
        id: todos.length + 1,
        name: capitalizedTodo,
        status: "Active",
      };
      setTodos((t) => [...t, newTodoObj]);
      setNewTodo("");
    } else {
      alert("New task cannot be an empty string!");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div
      className={`flex items-center pl-5 max-w-3xl w-full rounded-md ${
        theme === "dark"
          ? "bg-veryDarkDesaturatedBlue"
          : "bg-veryLightGrayishBlue"
      }`}
    >
      <RadioButton
        onClick={handleAddTodo}
        className={
          "h-5 w-5 rounded-full border-2 border-veryDarkGrayishBlue1 hover:bg-checkIcon hover:bg-no-repeat hover:bg-center hover:bg-purple-600"
        }
      />
      <input
        type="text"
        value={value}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Create a new todo..."
        className={`w-full border-none p-5 bg-inherit outline-none text-sm  ${
          theme === "dark" ? "text-lightGrayishBlueLight" : "text-veryDarkBlue"
        }  rounded-md`}
      />
    </div>
  );
};

export default TodoInput;
