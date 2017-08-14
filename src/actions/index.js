export const addRevenueItem = (item) => {
  return {
    type: 'ADD_REVENUE_ITEM',
    payload: item
  };
};

export const deleteRevenueItem = (index) => {
  return {
    type: 'DELETE_REVENUE_ITEM',
    payload: index
  };
};

export const addExpensesItem = (item) => {
  return {
    type: 'ADD_EXPENSES_ITEM',
    payload: item
  };
};

export const deleteExpensesItem = (index) => {
  return {
    type: 'DELETE_EXPENSES_ITEM',
    payload: index
  };
};

export const reset = () => {
  return {
    type: 'RESET'  
  };
};
