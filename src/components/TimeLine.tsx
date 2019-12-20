import React, { useEffect } from "react";
import vis from "vis-timeline";

export interface Props {
  data: [];
  group:[];
  options:vis.TimelineOptions
  enthusiasmLevel?: number;
}

const TimeLine = ({ data,group ,options}: Props) => {
  const dataSets = new vis.DataSet(data);
  const groupSets = new vis.DataSet(group)
  useEffect((): void => {
   const timeLine =  new vis.Timeline(
      document.querySelector(".vis-container") as HTMLElement,
      dataSets,
      groupSets,
      options
    );
  });
  return <div className="vis-container" ref="container"></div>;
};

export default TimeLine;
