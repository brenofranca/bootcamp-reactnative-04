export const Types = {
  ADD_FAVORITE_REQUEST: 'favorites/ADD_FAVORITE_REQUEST',
  ADD_FAVORITE_SUCCESS: 'favorites/ADD_FAVORITE_SUCCESS',
  ADD_FAVORITE_FAILURE: 'favorites/ADD_FAVORITE_FAILURE',
};

const INITIAL_STATE = {
  loading: false,
  data: [],
  errorOnAdd: null,
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_FAVORITE_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_FAVORITE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload.repository],
      };
    case Types.ADD_FAVORITE_FAILURE:
      return { ...state, loading: false, errorOnAdd: action.payload.message };
    default:
      return state;
  }
}

export const Creators = {
  addFavoriteRequest: repoName => ({
    type: Types.ADD_FAVORITE_REQUEST,
    payload: {
      repoName,
    },
  }),

  addFavoriteSuccess: repository => ({
    type: Types.ADD_FAVORITE_SUCCESS,
    payload: {
      repository,
    },
  }),

  addFavoriteFailure: message => ({
    type: Types.ADD_FAVORITE_FAILURE,
    payload: {
      message,
    },
  }),
};
