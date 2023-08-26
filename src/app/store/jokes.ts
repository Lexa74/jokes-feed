import {action, makeObservable, observable} from 'mobx';
import {IJokes} from "../services/interfaces/jokes";
import {getJokesBySearch} from "../services/jokes";

export class JokesStore {
  @observable jokesBySearch: IJokes[] = []

  constructor() {
    makeObservable(this);
  }

  @action
  async searchJokes(value: string) {
    if(value.length < 3) {
      this.jokesBySearch = []
    }
    if(value.length >= 3) {
      this.jokesBySearch = await getJokesBySearch(value)
    }
  }
}