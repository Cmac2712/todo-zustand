import { useState } from "react";
import { DeleteTodo } from "./DeleteTodo";
import { UpdateTodo } from "./UpdateTodo";

interface TodoItemProps {
  text: string
  id: string
} 

const TodoItem = ({text, id}:TodoItemProps) => {

  const [editMode, setEditMode] = useState(false)

  return (
    <li id={id}>
      { editMode ? <UpdateTodo text={text} id={id} close={() => setEditMode(false)} /> : <p>{text}</p> }
      <DeleteTodo id={id}/>
      <button onClick={() => setEditMode(!editMode)}>Edit</button>
    </li>
  )
};

export { TodoItem };
