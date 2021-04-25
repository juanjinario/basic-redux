import { decrementAction, incrementAction, multiplyAction, resetAction } from "./count/count.actions";
import { IAction } from "./ngrx-fake/ngrx";

function reducer(state = 10, action: IAction) {
  switch (action.type) {
    case "INCREMENT":
      return (state += 1);
    case "DECREMENT":
      return (state -= 1);
    case "MULTIPLY":
      return state * action.payload;
    case "DIVIDE":
      return state / action.payload;
    case "RESET":
      return state = 0;
    default:
      return state;
  }
}

console.log(reducer(5, multiplyAction)); // 50
console.log(reducer(15, incrementAction)); // 16
console.log(reducer(15, resetAction)); // 0