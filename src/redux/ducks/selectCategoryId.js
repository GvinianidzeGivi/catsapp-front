const SELECT_CATEGORY_ID = "SELECT_CATEGORY_ID";

const initialState = {
  selectedCategoryId: null,
};

export const selectCategoryId = (category) => (dispatch) => {
  dispatch({
    type: SELECT_CATEGORY_ID,
    payload: category,
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY_ID:
      return { selectCategoryId: action.payload };
    default:
      return state;
  }
};
