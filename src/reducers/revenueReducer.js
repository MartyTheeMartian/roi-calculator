export const revenueReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_REVENUE_ITEM':
      return [...state, action.payload];
    case 'DELETE_REVENUE_ITEM':
      state.splice(action.payload, 1);
      const newState = state.slice();
      return newState;
    default:
      return state;
  }
};
