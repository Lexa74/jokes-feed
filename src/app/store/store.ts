import { JokesStore } from './jokes';

export function createStore() {
  return {
    jokes: new JokesStore()
  };
}
export type Store = ReturnType<typeof createStore>;
