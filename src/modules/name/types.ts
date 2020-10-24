import { ActionType } from "typesafe-actions";
import { actions } from "./actions";

export type NameAction = ActionType<typeof actions>;

export type NameState = string;
