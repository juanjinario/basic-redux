import { createStore, Store } from "redux";
import { incrementAction, multiplyAction } from './count/count.actions';
import { countReducer } from './count/count.reducer';

const store: Store = createStore(countReducer, 20);

// El orden importa
store.subscribe(() => {
  console.log( store.getState() );
})

store.dispatch(incrementAction);

store.dispatch(multiplyAction);