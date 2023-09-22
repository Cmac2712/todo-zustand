import { useSyncExternalStore } from "react"

const createStore = (createState) => {
  let state

  const listeners = new Set()

  const setState = (partial, replace) => {
    const nextState =
      typeof partial === 'function'
        ? partial
        : partial

    if (nextState !== state) {
      const previousState = state
      state =
        replace ?? typeof nextState !== 'object'
          ? (nextState)
          : Object.assign({}, state, nextState)
      listeners.forEach((listener) => listener(state, previousState))
    }
  }

export function useStore(
  api: any,
) {

  const slice = useSyncExternalStore(
    api.subscribe,
    api.getState,
    api.getServerState || api.getState,
  )

  return slice
}

export const create = (createState: any) => {
  const api = createStore(createState)

  const useBoundStore = useStore(api, selector, equalityFn)

  Object.assign(useBoundStore, api)

  return useBoundStore
}