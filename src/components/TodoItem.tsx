import { DeleteTodo } from "./DeleteTodo";

interface TodoItemProps {
  text: string
  id: string
} 

const TodoItem = ({text, id}:TodoItemProps) => {
  return (
    <li id={id}>
      {text}
      <DeleteTodo id={id}/>
    </li>
  )
};

export { TodoItem };
