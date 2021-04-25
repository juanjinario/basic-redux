import { decrementAction, incrementAction, multiplyAction, resetAction } from "./count/count.actions";
import { countReducer } from "./count/count.reducer";
import { IAction, IReducer } from "./ngrx-fake/ngrx";

class Store<T> {
  constructor(private reducer: IReducer<T>,
              private state: T) {
  }

  getState() {
    return this.state;
  }
}

const store = new Store(countReducer, 10);
console.log(store.getState());