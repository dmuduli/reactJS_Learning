import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let ChartbarHeight = "75%";
  if (props.max > 0) {
    ChartbarHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar_inner">
        <div
          className="chart-bar_fill"
          style={{ height: ChartbarHeight }}
        ></div>
      </div>
      <div className="chart-bar_label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
