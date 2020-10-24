import {
  createAction,
  ActionType,
  createReducer,
  action,
} from "typesafe-actions";
import List, { ListItem } from "../library/types/List";
import { call, put, takeEvery } from "redux-saga/effects";
import { listApi } from "../api/api";

const GET_LIST = "GET_LIST";
const GET_LIST_SUCCESS = "GET_LIST_SUCCESS";
const GET_LIST_ERROR = "GET_LIST_ERROR";
const REMOVE_LIST = "REMOVE_LIST";

export const getList = createAction(GET_LIST)();

export const getListSuccess = createAction(GET_LIST_SUCCESS)<List>();

export const getListError = createAction(GET_LIST_ERROR)<List>();

export const removeList = createAction(REMOVE_LIST)<string>();

const initialState: List = {
  loading: true,
  list: null,
};

function* getListSaga() {
  try {
    const list = yield call(listApi.getList);
    yield put({
      type: GET_LIST_SUCCESS,
      payload: {
        loading: false,
        list: list.data,
      },
    });
  } catch (e) {
    yield put({
      type: GET_LIST_ERROR,
      payload: {
        loading: false,
      },
    });
    throw new Error(e);
  }
}

export function* listSaga() {
  yield takeEvery(GET_LIST, getListSaga);
}

const actions = { getList, getListSuccess, getListError, removeList };
type ListAction = ActionType<typeof actions>;

export const list = createReducer<List, ListAction>(initialState, {
  [GET_LIST]: (state) => state,
  [GET_LIST_SUCCESS]: (state, action) => action.payload,
  [GET_LIST_ERROR]: (state, action) => action.payload,
  [REMOVE_LIST]: (state, action) => ({
    loading: false,
    list:
      state.list &&
      state.list.filter((item) => item.alpha2Code !== action.payload),
  }),
});
