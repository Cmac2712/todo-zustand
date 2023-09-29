import { create } from "zustand";
import { persist } from "zustand/middleware";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// import { create } from "../simplified-zustand";
import { v4 as createId } from 'uuid';

interface Profile {
  avatar: string
  firstName: string
  lastName: string
}

export type ID = string

interface TodoItem {
    text: string
    id: ID
}

type TodoItemInput = Omit<TodoItem, 'id'> 

interface TodoStoreProps {
  todos: Array<TodoItem>
  profile: Profile,
  actions: {
    createTodo: (todo: TodoItemInput) => void
    deleteTodo: (id: ID) => void
    updateTodo: (id: ID, update: string) => void
    getTodo: (id: ID) => TodoItem | undefined
  };
}

function createTodo(todos: Array<TodoItem>, todo: TodoItemInput) { 
  return {todos: [ ...todos, { ...todo, id: createId() } ]} 
}

function deleteTodo(todos: Array<TodoItem>, id: ID) { 
  return { todos: todos.filter(todo => todo.id !== id)}
}

function getTodo(todos: Array<TodoItem>, id: ID) {
  return todos.find(todo => todo.id === id)
}

function updateTodo(todos: Array<TodoItem>, update:string, id:ID) {
  const updatedTodos = deleteTodo(todos, id).todos 
  const updatedTodo = { id, text: update }

  return { todos: [...updatedTodos, updatedTodo]} 
}

export const useTodoStore = create<TodoStoreProps>(
  (set, get) => ({
    todos: [], 
    profile: { 
      avatar: 'https://avatars.githubusercontent.com/u/4986039?v=4',
      firstName: 'Craig',
      lastName: 'MacIntyre'
    },
    actions: {
      createTodo: (todo) => set(createTodo(get().todos, todo)),
      deleteTodo: (id) =>  set(deleteTodo(get().todos, id)),
      updateTodo: (id, update) => set(updateTodo(get().todos, id, update)),
      getTodo: (id) => getTodo(get().todos, id) 
    },
  })
);


export const useGetProfile = () => useTodoStore(state => state.profile);
export const useGetTodos = () => useTodoStore(state => state.todos);
export const useTodoActions = () => useTodoStore((state) => state.actions);
