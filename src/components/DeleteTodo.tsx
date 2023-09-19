import { ID, useTodoActions } from '../stores/todoStore'

interface DeleteTodoProps {
    id: ID
}

const DeleteTodo = ({id}: DeleteTodoProps) => {
    const  { deleteTodo } = useTodoActions()

    const handleDelete = () => deleteTodo(id) 

    return <button onClick={handleDelete}>X</button> 
}

export { DeleteTodo }