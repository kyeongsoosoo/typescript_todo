import { ActionType, createAction, createReducer } from "typesafe-actions";
import Todo from "../../library/types/Todo";
import { getStorage } from "../../library/utils/useStorage";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./actions";
import { TodoState, TodoAction } from "./type";

const initialState: TodoState = [
  {
    id: "0",
    todo: "test",
    done: false,
  },
];

export const todo = createReducer<TodoState, TodoAction>(initialState, {
  [ADD_TODO]: (state, action) => {
    const nextId = (
      Math.max(...state.map((todo) => parseInt(todo.id)), 0) + 1
    ).toString();

    return [
      ...state,
      {
        id: nextId,
        todo: action.payload,
        done: false,
      },
    ];
  },
  [DELETE_TODO]: (state, action) =>
    state.filter((todo) => parseInt(todo.id) !== action.payload),
  [TOGGLE_TODO]: (state, action) =>
    state.map((todo) =>
      parseInt(todo.id) !== action.payload
        ? todo
        : { ...todo, done: !todo.done }
    ),
});
