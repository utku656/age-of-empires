import { call, put, takeLatest, all, select } from "redux-saga/effects";
import {
  FETCH_UNITS_REQUEST,
  fetchUnitsSuccess,
  fetchUnitsFailure,
  FETCH_UNIT_DETAIL,
  fetchUnitDetailSuccess,
  fetchUnitDetailFailure,
} from "./actions";

const getFood = (state) => state.costsFilter.Food;
const getWood = (state) => state.costsFilter.Wood;
const getGold = (state) => state.costsFilter.Gold;
const getAges = (state) => state.agesFilter;

function* fetchUnits() {
  try {
    let path = "http://localhost:3030/units";
    const ages = yield select(getAges);
    const food = yield select(getFood);
    const gold = yield select(getGold);
    const wood = yield select(getWood);

    if (ages !== "All" || wood || gold || food) {
      path = path + "?";
    }
    if (ages !== "All") {
      path = path + `age=${ages}&`;
    }
    if (wood) {
      path = path + `cost.Wood_gte=${wood[0]}&cost.Wood_lte=${wood[1]}&`;
    }
    if (gold) {
      path = path + `cost.Gold_gte=${gold[0]}&cost.Gold_lte=${gold[1]}&`;
    }
    if (food) {
      path = path + `cost.Food_gte=${food[0]}&cost.Food_lte=${food[1]}&`;
    }
    const response = yield call(fetch, path);
    const data = yield response.json();
    yield put(fetchUnitsSuccess(data));
  } catch (error) {
    yield put(fetchUnitsFailure(error.message));
  }
}
function* fetchUnitDetails(payload) {
  try {
    const response = yield call(
      fetch,
      `http://localhost:3030/units/${payload.id}`
    );
    const data = yield response.json();
    yield put(fetchUnitDetailSuccess(data));
  } catch (error) {
    yield put(fetchUnitDetailFailure(error.message));
  }
}

export function* watchFetchDataSaga() {
  yield all([
    takeLatest(FETCH_UNITS_REQUEST, fetchUnits),
    takeLatest(FETCH_UNIT_DETAIL, fetchUnitDetails),
  ]);
}
