import { legacy_createStore as createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { dataReducer } from "./reducers";
import { watchFetchDataSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(dataReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchFetchDataSaga);

export default store;
