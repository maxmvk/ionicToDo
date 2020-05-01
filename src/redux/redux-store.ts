import { createStore, combineReducers } from "redux";
import todosReducer from "./todos-reducer";

let rootReducer = combineReducers({
    todosState: todosReducer
});

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer);

export default store;