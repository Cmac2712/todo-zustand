import { AddTodo } from "./components/AddTodo"
import { TodoList } from "./components/TodoList"
import { useGetTodos } from "./stores/todoStore"

function App() {

  return (
    <>
      <h1>My Todo List</h1>
      <TodoList />
      <AddTodo /> 
    </>
  )
}

export default App
