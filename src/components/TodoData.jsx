import { useState } from "react";
import FilterTodos from "./FilterTodos";
import List from "./List";
import { useContext } from "react";
import { ThemeContext } from "../App";

import { AllTodo, ActiveTodo, CompletedTodo } from "./TodoCount";

const TodoData = ({ todos, setTodos }) => {
  const [filter, setFilter] = useState("all");
  const [draggedItemId, setDraggedItemId] = useState(null);

  const activeTodos = todos.filter((todo) => todo.status === "Active");
  const completedTodos = todos.filter((todo) => todo.status === "Completed");

  const { theme } = useContext(ThemeContext);

  const getFilteredTodos = () => {
    switch (filter) {
      case "active":
        return activeTodos;
      case "completed":
        return completedTodos;
      default:
        return todos;
    }
  };

  const getCountComponent = () => {
    switch (filter) {
      case "active":
        return <ActiveTodo activeTodos={activeTodos} />;
      case "completed":
        return <CompletedTodo completedTodos={completedTodos} />;
      default:
        return <AllTodo todos={todos} />;
    }
  };

  const handleClearCompleted = () => {
    const updatedTodos = todos.filter((todo) => todo.status === "Active");
    if (completedTodos.length === 0) {
      alert("No completed todos for now.");
      return;
    }
    if (
      window.confirm("Are you sure you want to remove all completed todos?")
    ) {
      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    }
  };

  const getFilterClassName = (filterType) => {
    return filter === filterType
      ? "cursor-pointer text-brightBlue"
      : "cursor-pointer hover:text-brightBlue";
  };

  const handleDragStart = (e, id) => {
    setDraggedItemId(id);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDrop = (e, targetId) => {
    e.preventDefault();
    const draggedIndex = todos.findIndex((todo) => todo.id === draggedItemId);
    const targetIndex = todos.findIndex((todo) => todo.id === targetId);

    const updatedTodos = [...todos];
    const [draggedItem] = updatedTodos.splice(draggedIndex, 1);
    updatedTodos.splice(targetIndex, 0, draggedItem);

    setTodos(updatedTodos);
    setDraggedItemId(null);
  };

  return (
    <>
      <ul
        className={`max-w-3xl w-full ${
          theme === "dark"
            ? "bg-veryDarkDesaturatedBlue"
            : "bg-veryLightGrayishBlue"
        }rounded-t-md`}
      >
        <List
          todos={getFilteredTodos()}
          setTodos={setTodos}
          handleDragStart={handleDragStart}
          handleDrop={handleDrop}
          draggedItemId={draggedItemId}
        />
      </ul>
      <div
        className={`flex items-center justify-between pl-5 -mt-8 ${
          theme === "dark"
            ? "bg-veryDarkDesaturatedBlue text-veryDarkGrayishBlue1"
            : "bg-veryLightGrayishBlue text-veryDarkGrayishBlue1"
        } p-5  text-sm max-w-3xl w-full rounded-b-md`}
      >
        {getCountComponent()}
        <p
          className="cursor-pointer hover:text-purple-400"
          onClick={handleClearCompleted}
        >
          Clear Completed
        </p>
      </div>
      <FilterTodos
        className={{
          all: getFilterClassName("all"),
          active: getFilterClassName("active"),
          completed: getFilterClassName("completed"),
        }}
        showAllTodo={() => setFilter("all")}
        showActiveTodo={() => setFilter("active")}
        showCompletedTodo={() => setFilter("completed")}
      />
    </>
  );
};

export default TodoData;
