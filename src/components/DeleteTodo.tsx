import { ID, useTodoActions } from '../stores/todoStore'

interface DeleteTodoProps {
    id: ID
}

const DeleteTodo = ({id}: DeleteTodoProps) => {
    const  { deleteTodo } = useTodoActions()

    const handleDelete = () => deleteTodo(id) 

    return <button className="btn  btn-error btn-sm text-xs rounded-none" onClick={handleDelete}>Delete</button> 
}

export { DeleteTodo }