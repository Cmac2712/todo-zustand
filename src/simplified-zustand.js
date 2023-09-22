// A new hook introduced in React 18 that also works in React 17
import { useSyncExternalStore } from "use-sync-external-store/shim";

export const create = (createState) => {
  // First, we define a function to get state.
  // It reads the state variable defined later in the same scope.
  const getState = () => state;

  // We need a set of listeners to notify the state updates.
  const listeners = new Set();

  // Likewise, we define a function to set state.
  const setState = (fn) => {
    // If `fn` is a function apply the current state,
    // otherwise, just use `fn` as next state.
    const nextState = typeof fn === "function" ? fn(state) : fn;
    // To avoid overwriting functions in state, we merge states.
    state = Object.assign({}, state, nextState);
    // Finally, invoke all listeners in the set.
    listeners.forEach((listener) => listener());
  };

  // Now, we define the initial state by calling `createState`.
  // We pass the two functions defined above.
  let state = createState(setState, getState);

  // For reactivity, we define a function to subscribe.
  const subscribe = (callback) => {
    // Add the callback function to the listeners set.
    listeners.add(callback);
    // And, return a function to unsubscribe.
    return () => listeners.delete(callback);
  };

  // Let's define a hook to be used in React.
  const useStore = (selector) =>
    useSyncExternalStore(subscribe, () => selector(getState()));

  // Finally, attach two functions to the hook function.
  // This allows us to read and write state outside React lifecycle.
  Object.assign(useStore, { getState, setState });

  // Return the hook function.
  return useStore;
};

export default create;
