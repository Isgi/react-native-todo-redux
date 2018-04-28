const initialState = {
  foods: [],
  isLoading: false,
  isError: false
}

const foodsReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case 'ALL_FOODS_PENDING':
      return {...state, isLoading: true};
    case 'ALL_FOODS_FULFILLED':
      return {...state, isLoading: false, foods: action.payload.data};
    case 'ALL_FOODS_REJECTED':
      return {...state, isLoading: false, isError: true};
    default:
      return state;
  }
}

export default foodsReducer;