import { Action, legacy_createStore as createStore } from "redux";    // 1. import createStore
interface A extends Action {
    payload: number;
}
const reducerFn = (state={counter:10}, action: A) => {    // 3. create reducer function
    switch(action.type) {
        case 'INCREMENT':
            return {counter: state.counter + 1};
        case 'DECREMENT':
            return {counter: state.counter-1}
        case 'ADDBY':
            return {counter: state.counter + action.payload
        }
        default:
            return state;
    }
}

export const store = createStore(reducerFn);    // 2. create store