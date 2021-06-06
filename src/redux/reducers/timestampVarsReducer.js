import { timestampVarsActions } from "../actions/actionType";

export function timestampVarsReducer(state = {}, action) {
  switch (action.type) {
    case timestampVarsActions.SET_TIMESTAMP_VARS:
      return action.vars;
    default:
      return state;
  }
}
