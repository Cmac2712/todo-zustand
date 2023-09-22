import { useSyncExternalStore } from "react";
import { todosStore } from "../stores/todoStoreNative.ts";

 const useTodos = () => useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);

 export { useTodos }

