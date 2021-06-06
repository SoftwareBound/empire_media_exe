import React from "react";
import { useDispatch } from "react-redux";
import { getDataByTimestamp } from "../../redux/actions/timestampActions";
const Button = ({ btn_name, btn_value }) => {
  const dispatch = useDispatch();
  const getDataByTime = () => {
    dispatch(getDataByTimestamp(btn_value.period, btn_value.percision));
  };
  return (
    <div className="col">
      <button
        className=" timestamp_btn btn btn-primary"
        onClick={getDataByTime}
      >
        {btn_name}
      </button>
    </div>
  );
};

export default Button;
