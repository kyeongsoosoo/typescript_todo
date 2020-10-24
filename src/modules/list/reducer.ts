import { createReducer } from "typesafe-actions";
import List from "../../library/types/List";
import { call, put, takeEvery } from "redux-saga/effects";
import { listApi } from "../../api/api";
import { ListAction } from "./types";
import {
  GET_LIST,
  GET_LIST_ERROR,
  GET_LIST_SUCCESS,
  REMOVE_LIST,
} from "./actions";

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
