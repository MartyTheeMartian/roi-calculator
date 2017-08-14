export const expensesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSES_ITEM':
      return [...state, action.payload];
    case 'DELETE_EXPENSES_ITEM':
      state.splice(action.payload, 1);
      const newState = state.slice();
      return newState;
    default:
      return state;
  }
};
