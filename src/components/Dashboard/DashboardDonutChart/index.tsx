import { useEffect, useRef } from "react";
import * as d3 from "d3";
import chartData from "../../../assets/data/chartData.json";

const data = chartData.map((d) => {
  return {
    label: d.label,
    value: d.value,
  };
});

const DashboardDonutChart = () => {
  const donutChart = useRef<SVGSVGElement>(null);

  useEffect(() => {
    //@ts-ignore
    const donutdata = d3.pie().value((d: any) => d.value)(data);
    const arc: any = d3.arc().innerRadius(40).outerRadius(70);
    const colors = d3.scaleOrdinal([
      "#ff0000",
      "#ff8000",
      "#ffff00",
      "#80ff00",
      "#00ff00",
      "#00ff80",
      "#00ffff",
      "#0080ff",
      "#0000ff",
      "#8000ff",
      "#ff00ff",
      "#ff0080"
    ]);

    const svg = d3
      .select(donutChart.current)
      .attr("width", 300)
      .attr("height", 200)
      .append("g")
      .attr("transform", "translate(180,70)");

    const tooldiv = d3
      .select("#chartArea")
      .append("div")
      .style("visibility", "hidden")
      .style("position", "absolute")
      .style("background-color", "beige");

    svg
      .append("g")
      .selectAll("path")
      .data(donutdata)
      .join("path")
      .attr("d", arc)
      .attr("fill", (d, i: any) => colors(i))
      .attr("stroke", "white")
      .on("mouseover", (e, d) => {
        console.log(e);
        console.log(d);

        tooldiv
          .style("visibility", "visible")
          //@ts-ignore
          .text(`${d.data.label}: ${d.data.value}`);
      })
      .on("mousemove", (e, d) => {
        tooldiv
          .style("top", e.pageY - 30 + "px")
          .style("left", e.pageX - 30 + "px");
      })
      .on("mouseout", () => {
        tooldiv.style("visibility", "hidden");
      });
  });

  return (
    <div id="chartArea">
      <svg ref={donutChart}></svg>
    </div>
  );
};

export default DashboardDonutChart;
