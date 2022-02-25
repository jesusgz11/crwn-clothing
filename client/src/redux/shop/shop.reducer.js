import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errMessage: undefined,
};

const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
  const {
    FETCH_COLLECTIONS_START,
    FETCH_COLLECTIONS_SUCCESS,
    FETCH_COLLECTIONS_FAILURE,
  } = ShopActionTypes;

  switch (type) {
    case FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: payload,
      };
    case FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errMessage: payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
