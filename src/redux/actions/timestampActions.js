import axios from "axios";
import { url, urlComplements } from "../../common/urls/url";
import { timestampActions } from "./actionType";
import { setTimestampVars } from "./timestampVarActions";
import { timeFigure, timeWords } from "../../common/titles/timestamp";

export function getDataByTimestamp(
  period = timeFigure.FIVE,
  percision = timeWords.MINUTES
) {
  return async function (dispatch) {
    try {
      const stockData = await axios.get(
        `${url.MAIN_URL}${period}${urlComplements.AFTER_PERIOD}${percision}${urlComplements.AFTER_PERCISION}`
      );

      dispatch(loadDataToStore(stockData.data));
      dispatch(setTimestampVars({ period: period, percision: percision }));
    } catch (e) {
      alert(e);
    }
  };
}

export function loadDataToStore(data) {
  return { type: timestampActions.LOAD_STOCK_DATA, data: data };
}
