import { createReducer } from "typesafe-actions";
import { getStorage, setStorage } from "../../library/utils/useStorage";
import { SAVE_NAME } from "./actions";
import { NameState, NameAction } from "./types";

const initialState: NameState = getStorage("name");

export const name = createReducer<NameState, NameAction>(initialState, {
  [SAVE_NAME]: (state, action) => {
    setStorage("name", action.payload);
    return action.payload;
  },
});
