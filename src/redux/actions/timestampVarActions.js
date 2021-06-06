import { timestampVarsActions } from "./actionType";

export function setTimestampVars(timeVars) {
  return {
    type: timestampVarsActions.SET_TIMESTAMP_VARS,
    vars: timeVars,
  };
}
