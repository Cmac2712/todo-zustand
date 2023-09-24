import { useState } from "react";
import { useTodoActions } from '../stores/todoStore'

interface UpdateTodoProps {
  text: string;
  id: string;
  close: () => void
}

const UpdateTodo = ({ text, id, close }: UpdateTodoProps) => {
  const { updateTodo } = useTodoActions()
  const [updateText, setUpdateText] = useState(text);

  return (
    <div id={id}>
      <input className="input input-success input-sm rounded-none mr-2" type="text" value={updateText} onChange={(e) => setUpdateText(e.target.value)} />
      <button className="btn btn-success btn-sm text-xs rounded-none" onClick={() => {
        updateTodo(updateText, id)
        close();
        }}>Update</button>
    </div>
  );
};

export { UpdateTodo };
