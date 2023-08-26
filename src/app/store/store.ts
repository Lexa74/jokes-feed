import { JokesStore } from './jokes';

export function createStore() {
  return {
    goods: new JokesStore()
  };
}
export type Store = ReturnType<typeof createStore>;
