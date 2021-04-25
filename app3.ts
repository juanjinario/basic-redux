import { decrementAction, incrementAction, multiplyAction, resetAction } from "./count/count.actions";
import { countReducer } from "./count/count.reducer";
import { IAction, IReducer } from './ngrx-fake/ngrx';

class Store<T> {
  constructor(private reducer: IReducer<T>,
              private state: T) {
  }

  getState() {
    return this.state;
  }

  dispatch(action: IAction) {
    this.state = this.reducer(this.state, action);
  }
}

const store = new Store(countReducer, 10);
console.log(store.getState());

store.dispatch(incrementAction);
console.log(store.getState());