import { create } from "zustand";
import { v4 as createId } from 'uuid';

export type ID = string

interface TodoItem {
    text: string
    id: ID
}

type TodoItemInput = Pick<TodoItem, 'text'> 

interface TodoStoreProps {
  todos: Array<TodoItem>
  actions: {
    createTodo: (todo: TodoItemInput) => void
    deleteTodo: (id: ID) => void
    getTodo: (id: ID) => TodoItem | undefined
  };
}

const useTodoStore = create<TodoStoreProps>((set, get) => ({
  todos: [], 
  actions: {
    createTodo: (todo) => set(() => { return {todos: [ ...get().todos, { ...todo, id: createId() } ]} }),
    deleteTodo: (id) =>  set(() => { return { todos: get().todos.filter(todo => todo.id !== id)}}),
    getTodo: (id) => get().todos.find(todo => todo.id === id)
  },
}));

export const useGetTodos = () => useTodoStore((state) => state.todos);
export const useTodoActions = () => useTodoStore((state) => state.actions);
