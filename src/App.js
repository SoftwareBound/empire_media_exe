import Timestamps from "./Timestamps";
import Chart from "./Chart";
import { useSelector, useDispatch } from "react-redux";
import { getDataByTimestamp } from "./redux/actions/timestampActions";
import React, { useEffect } from "react";
import { timeFigure, timeWords } from "./common/titles/timestamp";

const App = () => {
  const data = useSelector((state) => state.timestampReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!data.length) {
      dispatch(getDataByTimestamp(timeFigure.FIVE, timeWords.MINUTES));
    }
  }, []);
  return (
    <div className="container">
      <Timestamps />
      <Chart stockData={data} />
    </div>
  );
};

export default App;
