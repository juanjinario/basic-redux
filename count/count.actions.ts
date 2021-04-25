import { IAction } from "../ngrx-fake/ngrx";

export const incrementAction: IAction = {
    type: "INCREMENT"
}

export const decrementAction: IAction = {
    type: "DECREMENT"
}

export const multiplyAction: IAction = {
    type: "MULTIPLY",
    payload: 10
}

export const divideAction: IAction = {
    type: "DIVIDE",
    payload: 5
}

export const resetAction: IAction = {
    type: "RESET",
}