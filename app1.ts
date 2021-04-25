interface IAction {
    type: string,
    payload?: number
}

const incrementAction: IAction = {
    type: "INCREMENT"
}

const decrementAction: IAction = {
    type: "DECREMENT"
}

const multiplyAction: IAction = {
    type: "MULTIPLY",
    payload: 10
}

const divideAction: IAction = {
    type: "DIVIDE",
    payload: 5
}

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
    default:
      return state;
  }
}

// console.log(reducer(15, incrementAction));
console.log(reducer(15, decrementAction));
console.log(reducer(15, multiplyAction));
console.log(reducer(20, divideAction));