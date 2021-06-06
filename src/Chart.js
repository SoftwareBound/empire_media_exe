import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";
import { timeFigure, timeWords } from "./common/titles/timestamp";
import { headlines, chartTitles } from "./common/titles/headlines";
const Chart = ({ stockData }) => {
  const [tickIntervalVar, setTickIntervalVar] = useState(4);
  const tickVar = useSelector((state) => state.timestampVarsReducer);

  useEffect(() => {
    if (
      tickVar.period === timeFigure.ONE &&
      tickVar.percision.toString() === timeWords.MINUTES
    ) {
      setTickIntervalVar(4);
    }
    if (
      tickVar.period === timeFigure.FIVE &&
      tickVar.percision.toString() === timeWords.MINUTES
    ) {
      setTickIntervalVar(6);
    }
    if (
      tickVar.period === timeFigure.ONE &&
      tickVar.percision.toString() === timeWords.HOURS
    ) {
      setTickIntervalVar(12);
    }
    if (
      tickVar.period === timeFigure.WEEK_IN_HOURS &&
      tickVar.percision.toString() === timeWords.HOURS
    ) {
      setTickIntervalVar(24);
    }
  }, [tickVar]);
  const options = {
    title: { text: headlines.MAIN_TITLE },
    xAxis: {
      tickInterval: tickIntervalVar * 3600 * 1000,
      type: "datetime",
    },
    yAxis: {
      title: {
        text: chartTitles.Y_TITLE,
      },
    },

    legend: {
      enabled: false,
    },
    series: [
      {
        name: chartTitles.SERIES_TITLE,
        data: stockData.map((dat) => [new Date(dat.Date).getTime(), dat.Close]),
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Chart;
