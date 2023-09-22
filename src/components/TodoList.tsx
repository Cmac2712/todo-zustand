//import { useGetTodos } from "../stores/todoStore";
import { TodoItem } from "./TodoItem";
import { useTodos } from "../hooks/useTodos";

const TodoList = () => {
  //const todos = useGetTodos();
  const todos = useTodos()

  return <ul>{todos ? todos.map((todo) => <TodoItem id={todo.id} text={todo.text} key={todo.id}/>) : null}</ul>;
};

export { TodoList };
