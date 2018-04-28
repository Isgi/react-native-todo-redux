const initialState = {
  todos: [],
  isLoading: false,
  isError: false
}

const todosReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case 'ALL_TODOS_PENDING':
      return {...state, isLoading: true};
    case 'ALL_TODOS_FULFILLED':
      return {...state, isLoading: false, todos: action.payload.data};
    case 'ALL_TODOS_REJECTED':
      return {...state, isLoading: false, isError: true};
    default:
      return state;
  }
}

export default todosReducer;