import { useGetTodos } from "../stores/todoStore";
import { TodoItem } from "./TodoItem";

const TodoList = () => {
  const todos = useGetTodos();
  return <ul>{todos ? todos.map((todo) => <TodoItem id={todo.id} text={todo.text} key={todo.id}/>) : null}</ul>;
};

export { TodoList };
