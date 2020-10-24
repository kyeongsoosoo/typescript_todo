import { createAction } from "typesafe-actions";
import List from "../../library/types/List";

export const GET_LIST = "GET_LIST";
export const GET_LIST_SUCCESS = "GET_LIST_SUCCESS";
export const GET_LIST_ERROR = "GET_LIST_ERROR";
export const REMOVE_LIST = "REMOVE_LIST";

export const getList = createAction(GET_LIST)();

export const getListSuccess = createAction(GET_LIST_SUCCESS)<List>();

export const getListError = createAction(GET_LIST_ERROR)<List>();

export const removeList = createAction(REMOVE_LIST)<string>();

export const actions = { getList, getListSuccess, getListError, removeList };
