import { combineReducers } from "redux";
import name from "./name";
import todo from "./todo";


const rootReducer = combineReducers({
    name,
    todo
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;