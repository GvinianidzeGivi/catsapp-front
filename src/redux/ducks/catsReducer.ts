import { AnyAction } from 'redux';
import axiosInstance from '../../helpers/axiosInstance';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { CatsState } from './types';

const SET_RESULTS = 'SET_RESULTS';
const SET_CATEGORIES = 'SET_CATEGORIES';
const SELECT_CATEGORY_ID = 'SELECT_CATEGORY_ID';
const INCREASE_PAGE_NUMBER = 'INCREASE_PAGE_NUMBER';

const initialState: CatsState = {
  selectedCategoryId: null,
  pageLimit: 10,
  categories: [],
  results: [],
};

export const selectCategoryId = (categoryId: number) => ({
  type: SELECT_CATEGORY_ID,
  payload: categoryId,
});

export const getCategories =
  (): ThunkAction<void, RootState, unknown, AnyAction> => async (dispatch) => {
    const results = await axiosInstance().get('/categories');
    dispatch({
      type: SET_CATEGORIES,
      payload: results.data,
    });
  };

export const increasePageLimitBy = (step: number) => ({
  type: INCREASE_PAGE_NUMBER,
  payload: step,
});

export const getCats =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch, getState) => {
    const { selectedCategoryId, pageLimit } = getState().cats;
    const results = await axiosInstance().get(
      `/images/search?limit=${pageLimit}&category_ids=${selectedCategoryId}`
    );

    dispatch({
      type: SET_RESULTS,
      payload: results.data,
    });
  };

export default function catsReducer(
  state = initialState,
  action: AnyAction
): CatsState {
  switch (action.type) {
    case SET_RESULTS:
      return {
        ...state,
        results: [...state.results, ...action.payload],
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case INCREASE_PAGE_NUMBER:
      return {
        ...state,
        pageLimit: state.pageLimit + action.payload,
      };
    case SELECT_CATEGORY_ID:
      return {
        ...state,
        results: [],
        selectedCategoryId: action.payload,
        pageLimit: initialState.pageLimit,
      };
    default:
      return state;
  }
}
