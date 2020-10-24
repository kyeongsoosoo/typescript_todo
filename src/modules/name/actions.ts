import { createAction } from "typesafe-actions";

export const SAVE_NAME = "name/save_name";

export const saveName = createAction(SAVE_NAME)<string>();

export const actions = { saveName };
