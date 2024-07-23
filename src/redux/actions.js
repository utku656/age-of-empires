export const FETCH_UNITS_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_UNITS_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_UNITS_FAILURE = "FETCH_DATA_FAILURE";
export const FETCH_UNIT_DETAIL = "FETCH_UNIT_DETAIL";
export const FETCH_UNIT_DETAIL_SUCCESS = "FETCH_UNIT_DETAIL_SUCCESS";
export const FETCH_UNIT_DETAIL_FAIL = "FETCH_UNIT_DETAIL_FAIL";
export const SET_AGES_FILTER = "SET_AGES_FILTER";
export const SET_COSTS_FILTER = "SET_COSTS_FILTER";

export const fetchUnitsRequest = (data) => ({
  type: FETCH_UNITS_REQUEST,
  payload: data,
});

export const fetchUnitsSuccess = (data) => ({
  type: FETCH_UNITS_SUCCESS,
  payload: data,
});

export const fetchUnitsFailure = (error) => ({
  type: FETCH_UNITS_FAILURE,
  payload: error,
});
export const fetchUnitDetail = (id) => ({
  type: FETCH_UNIT_DETAIL,
  id,
});
export const fetchUnitDetailSuccess = (data) => ({
  type: FETCH_UNIT_DETAIL_SUCCESS,
  payload: data,
});
export const fetchUnitDetailFailure = (error) => ({
  type: FETCH_UNIT_DETAIL_FAIL,
  payload: error,
});
export const setAgesFilter = (data) => ({
  type: SET_AGES_FILTER,
  payload: data,
});
export const setCostsFilter = (data) => ({
  type: SET_COSTS_FILTER,
  payload: data,
});
