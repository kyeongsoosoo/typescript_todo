import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { listSaga } from "./list";
import { name } from "./name";
import { todo } from "./todo";
import { list } from "./list";

const rootReducer = combineReducers({
  name,
  todo,
  list,
});

export function* rootSaga() {
  yield all([listSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
