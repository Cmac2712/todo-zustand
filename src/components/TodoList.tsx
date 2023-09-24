// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useGetTodos } from "../stores/todoStore";
import { TodoItem } from "./TodoItem";

const TodoList = () => {
  const todos = useGetTodos();

  return (
    <table className="table table-zebra w-full rounded-none">
      <tbody>
        {todos
          ? todos.map((todo) => (
              <TodoItem id={todo.id} text={todo.text} key={todo.id} />
            ))
          : null}
      </tbody>
    </table>
  );
};

export { TodoList };
