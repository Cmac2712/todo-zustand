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
    <li id={id}>
      <input type="text" value={updateText} onChange={(e) => setUpdateText(e.target.value)} />
      <button onClick={() => {
        updateTodo(updateText, id)
        close();
        }}>Update</button>
    </li>
  );
};

export { UpdateTodo };
