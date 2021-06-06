import { timestampActions } from "../actions/actionType";
export function timestampReducer(state = [], action) {
  switch (action.type) {
    case timestampActions.LOAD_STOCK_DATA:
      return [...action.data];
    default:
      return state;
  }
}
