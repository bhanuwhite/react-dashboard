import { useEffect, useRef, useState } from "react";
import {
  axisBottom,
  axisLeft,
  ScaleBand,
  scaleBand,
  ScaleLinear,
  scaleLinear,
  select,
} from "d3";
import { IData } from "../Interface";
import "./DashboardLineChart.scss";
// import * as d3 from "d3";

import * as _d3 from "d3";
import d3Tip from "d3-tip";

const d3: any = { ..._d3, tip: d3Tip };

interface LineChartProps {
  data: IData[];
}

interface AxisBottomProps {
  scale: ScaleBand<string>;
  transform: string;
}

interface AxisLeftProps {
  scale: ScaleLinear<number, number, never>;
}

interface LinesProps {
  data: LineChartProps["data"];
  height: number;
  scaleX: AxisBottomProps["scale"];
  scaleY: AxisLeftProps["scale"];
  line: any;
  toolTip: any;
  setValue: any;
  setMouseX: any;
  setMouseY: any;
  setLabel: any;
}

function AxisBottom({ scale, transform }: AxisBottomProps) {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(axisBottom(scale));
    }
  }, [scale]);

  return <g ref={ref} transform={transform} />;
}

function AxisLeft({ scale }: AxisLeftProps) {
  const ref = useRef<SVGGElement>(null);

  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(axisLeft(scale));
    }
  }, [scale]);

  return <g ref={ref} />;
}

function Lines({
  data,
  line,
  scaleX,
  scaleY,
  toolTip,
  setValue,
  setMouseX,
  setMouseY,
  setLabel,
}: LinesProps) {
  return (
    <>
      <path
        fill="none"
        stroke="green"
        stroke-width="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        d={line(data) as string}
      />
      {data.map(({ value, label }) => (
        <circle
          key={`bar-${label}`}
          cx={scaleX(label)}
          cy={scaleY(value)}
          r="7"
          fill="green"
          onMouseOver={toolTip.show}
          onMouseEnter={(e: any) => {
            setMouseX(e.pageX-30);
            setMouseY(e.pageY-30);
            setValue(value);
            setLabel(label);
          }}
          onMouseOut={toolTip.hide}
          onMouseLeave={() => {
            setMouseX(0);
            setMouseY(0);
            setValue("");
            setLabel("");
          }}
        />
      ))}
    </>
  );
}

export function DashboardLineChart({ data }: LineChartProps) {
  const [value, setValue] = useState(null);
  const [label, setLabel] = useState("");
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const margin = { top: 10, right: 0, bottom: 20, left: 30 };
  const width = 500 - margin.left - margin.right;
  const height = 140 - margin.top - margin.bottom;

  const scaleX = scaleBand()
    .domain(data.map(({ label }) => label))
    .range([0, width])
    .padding(0.5);
  const scaleY = scaleLinear()
    .domain([0, Math.max(...data.map(({ value }) => value))])
    .range([height, 0]);

  const line = _d3
    .line<any>()
    .defined((d: any): any => !isNaN(d.value))
    .x((d: any): any => scaleX(d.label))
    .y((d: any): any => scaleY(d.value));

  const toolTip = d3
    .tip()
    .attr("class", "d3-tip_line")
    .offset([-10, 0])
    .html((d: any) => {
      return `<div style="position:relative; font-size: 15px; background-color: beige; width: 70px; border-radius: 5px ; padding: 1px; margin: 1px;
      top: ${mouseY}px; left:${mouseX}px"><strong>${label}</strong> <span style='color:red'>${value}</span></div>`;
    });

  const svg = d3.select("svg");
  svg.call(toolTip);

  return (
    <svg
      width={width + margin.left + margin.right}
      height={height + margin.top + margin.bottom}
    >
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom scale={scaleX} transform={`translate(0, ${height})`} />
        <AxisLeft scale={scaleY} />
        <Lines
          data={data}
          height={height}
          scaleX={scaleX}
          scaleY={scaleY}
          line={line}
          toolTip={toolTip}
          setValue={setValue}
          setMouseX={setMouseX}
          setMouseY={setMouseY}
          setLabel={setLabel}
        />
      </g>
    </svg>
  );
}
