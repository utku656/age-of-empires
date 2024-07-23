import {
  FETCH_UNITS_REQUEST,
  FETCH_UNITS_SUCCESS,
  FETCH_UNITS_FAILURE,
  FETCH_UNIT_DETAIL,
  FETCH_UNIT_DETAIL_SUCCESS,
  FETCH_UNIT_DETAIL_FAIL,
  SET_AGES_FILTER,
  SET_COSTS_FILTER,
} from "./actions";

const initialState = {
  units: [],
  loading: false,
  error: null,
  selectedUnit: {},
  agesFilter: "All",
  costsFilter: {
    Food: null,
    Wood: null,
    Gold: null,
  },
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UNITS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_UNITS_SUCCESS:
      return {
        ...state,
        loading: false,
        units: action.payload,
      };
    case FETCH_UNITS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_UNIT_DETAIL:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_UNIT_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedUnit: action.payload,
      };
    case FETCH_UNIT_DETAIL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_AGES_FILTER:
      return {
        ...state,
        loading: false,
        agesFilter: action.payload,
      };
    case SET_COSTS_FILTER:
      const { resource, value } = action.payload;
      const costs = { ...state.costsFilter };
      costs[resource] = value;
      return {
        ...state,
        loading: false,
        costsFilter: costs,
      };
    default:
      return state;
  }
};
