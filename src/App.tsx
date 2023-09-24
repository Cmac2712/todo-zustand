import { AddTodo } from "./components/AddTodo"
import { TodoList } from "./components/TodoList"
import './index.css'

function App() {
  return (
    <>

      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-center py-3">My Todos</h1>
        <TodoList />
        <AddTodo />
      </div>
    </>
  );
}

export default App;
