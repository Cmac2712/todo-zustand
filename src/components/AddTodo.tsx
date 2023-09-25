import { useState } from "react"
import { useTodoActions } from "../stores/todoStore"

const AddTodo = () => {
    const { createTodo } = useTodoActions()
    const [todoInput, setTodoInput] = useState('')

    const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (todoInput === '') return

        createTodo({ text: todoInput})
        setTodoInput('')
    }

    return (
        <div className="fixed w-full bottom-0 left-0 py-6">
            <form className="flex justify-center" onSubmit={handleSubmit}>
                <input className="input input-bordered input-primary rounded-none mr-2" name="todoInput" type="text" onChange={(e) => setTodoInput(e.target.value)} value={todoInput}/>
                <button className="btn btn-primary rounded-none">Add Todo</button>
            </form>
        </div>
    )
}

export { AddTodo }