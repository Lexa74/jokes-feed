import {action, makeObservable, observable} from 'mobx';
import {IJokes} from "../services/interfaces/jokes";
import {getJokesBySearch} from "../services/jokes";

export class JokesStore {
  @observable jokesBySearch: IJokes[] = []

  constructor() {
    makeObservable(this);
  }

  @action
  async searchJokes(value: string, numberSymbols: number) {
    if(value.length < numberSymbols) {
      this.jokesBySearch = []
    }
    if(value.length >= numberSymbols) {
      this.jokesBySearch = await getJokesBySearch(value)
    }
  }
}