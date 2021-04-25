export interface IAction {
    type: string,
    payload?: number
}

export interface IReducer<T> {
    (state: T, action: IAction): T
}