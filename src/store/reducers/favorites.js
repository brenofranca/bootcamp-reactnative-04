const INITIAL_STATE = {
  loading: false,
  data: [],
  errorOnAdd: null
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE_REQUEST':
      return { ...state, loading: true };
    case 'ADD_FAVORITE_SUCCESS':
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload.repository]
      };
    case 'ADD_FAVORITE_FAILURE':
      return { ...state, loading: false, errorOnAdd: action.payload.message };
    default:
      return state;
  }
}
