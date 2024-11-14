import { useContext } from "react";
import { ThemeContext } from "../App";

const FilterTodos = ({
  showAllTodo,
  showActiveTodo,
  showCompletedTodo,
  className,
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`max-w-3xl w-full ${
        theme === "dark"
          ? "bg-veryDarkDesaturatedBlue text-lightGrayishBlueLight"
          : "bg-veryLightGrayishBlue text-veryDarkGrayishBlue1"
      } p-5 text-md flex justify-evenly  rounded-md`}
    >
      <p className={className.all} onClick={showAllTodo}>
        All
      </p>
      <p className={className.active} onClick={showActiveTodo}>
        Active
      </p>
      <p className={className.completed} onClick={showCompletedTodo}>
        Completed
      </p>
    </div>
  );
};

export default FilterTodos;
