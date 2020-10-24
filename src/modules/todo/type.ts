import { ActionType } from "typesafe-actions";
import Todo from "../../library/types/Todo";
import { actions } from "./actions";

export type TodoAction = ActionType<typeof actions>;

export type TodoState = Todo[];
