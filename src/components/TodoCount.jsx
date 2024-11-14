export const AllTodo = ({ todos }) => {
  if (todos.length === 0) {
    return "No items left";
  } else if (todos.length === 1) {
    return `${todos.length} item left`;
  } else {
    return `${todos.length} items left`;
  }
};

export const ActiveTodo = ({ activeTodos }) => {
  if (activeTodos.length === 0) {
    return "No items left";
  } else if (activeTodos.length === 1) {
    return `${activeTodos.length} item left`;
  } else {
    return `${activeTodos.length} items left`;
  }
};

export const CompletedTodo = ({ completedTodos }) => {
  if (completedTodos.length === 0) {
    return "No items left";
  } else if (completedTodos.length === 1) {
    return `${completedTodos.length} item left`;
  } else {
    return `${completedTodos.length} items left`;
  }
};
