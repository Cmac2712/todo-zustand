import { useState } from "react"
import { useTodoActions } from "../stores/todoStore"
import { todosStore } from "../stores/todoStoreNative.ts";

const AddTodo = () => {
    //const { createTodo } = useTodoActions()
    const [todoInput, setTodoInput] = useState('')

    const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        todosStore.addTodo()
        if (todoInput === '') return

        //createTodo({ text: todoInput})
        setTodoInput('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="todoInput" type="text" onChange={(e) => setTodoInput(e.target.value)} value={todoInput}/>
            <button>Add Todo</button>
        </form>
    )
}

export { AddTodo }