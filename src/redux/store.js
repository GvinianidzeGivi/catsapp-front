import { combineReducers, createStore, applyMiddleware } from "redux";
import selectCategoryIdReducer from "./ducks/selectCategoryId";
import thunk from "redux-thunk";

const middlewares = [thunk];

const reducer = combineReducers({
  selectCategoryId: selectCategoryIdReducer,
});

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
