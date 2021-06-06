import React from "react";
import Button from "./common/components/Button";
import { buttonHeadlines } from "./common/titles/headlines";
import "./style.css";
import { timeFigure, timeWords } from "./common/titles/timestamp";
const Timestamps = () => {
  return (
    <div className="row timestamp_container ">
      <Button
        btn_name={buttonHeadlines.ONE_MINUTE}
        btn_value={{ period: timeFigure.ONE, percision: timeWords.MINUTES }}
      />
      <Button
        btn_name={buttonHeadlines.FIVE_MINUTE}
        btn_value={{ period: timeFigure.FIVE, percision: timeWords.MINUTES }}
      />
      <Button
        btn_name={buttonHeadlines.ONE_HOUR}
        btn_value={{ period: timeFigure.ONE, percision: timeWords.HOURS }}
      />
      <Button
        btn_name={buttonHeadlines.ONE_WEEK}
        btn_value={{
          period: timeFigure.WEEK_IN_HOURS,
          percision: timeWords.HOURS,
        }}
      />
    </div>
  );
};

export default Timestamps;
