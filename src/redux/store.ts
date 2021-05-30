import { combineReducers, createStore, applyMiddleware } from 'redux';
import catsReducer from './ducks/catsReducer';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const reducer = combineReducers({
  cats: catsReducer,
});

const store = createStore(reducer, applyMiddleware(...middlewares));

export type RootState = ReturnType<typeof store.getState>;

export default store;
