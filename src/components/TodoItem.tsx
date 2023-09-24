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
    <tr id={id} className="flex p-2 justify-between">
      <td className="flex items-center">{ editMode ? <UpdateTodo text={text} id={id} close={() => setEditMode(false)} /> : <p className="m-0">{text}</p> }</td>
      <td>
        <button className="btn btn-info btn-sm text-xs rounded-none mr-2" onClick={() => setEditMode(!editMode)}>Edit</button>
        <DeleteTodo id={id}/>
      </td>
    </tr>
  )
};

export { TodoItem };
