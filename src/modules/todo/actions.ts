import { createAction } from "typesafe-actions";

export const ADD_TODO = "todo/add_todo";
export const DELETE_TODO = "todo/delete_todo";
export const TOGGLE_TODO = "todo/toggle_todo";

export const addTodo = createAction(ADD_TODO)<string>();
export const deleteTodo = createAction(DELETE_TODO)<number>();
export const toggleTodo = createAction(TOGGLE_TODO)<number>();

export const actions = { addTodo, deleteTodo, toggleTodo };
