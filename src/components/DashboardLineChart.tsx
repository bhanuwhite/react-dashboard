import { useEffect, useRef } from "react";
import {
  axisBottom,
  axisLeft,
  ScaleBand,
  scaleBand,
  ScaleLinear,
  scaleLinear,
  select,
} from "d3";
import { IData } from "./Interface";
import * as d3 from "d3";

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

function Lines({ data, line, scaleX, scaleY }: LinesProps) {
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
          r="5"
          fill="green"
        />
      ))}
    </>
  );
}

export function DashboardLineChart({ data }: LineChartProps) {
  const margin = { top: 10, right: 0, bottom: 20, left: 30 };
  const width = 500 - margin.left - margin.right;
  const height = 260 - margin.top - margin.bottom;

  const scaleX = scaleBand()
    .domain(data.map(({ label }) => label))
    .range([0, width])
    .padding(0.5);
  const scaleY = scaleLinear()
    .domain([0, Math.max(...data.map(({ value }) => value))])
    .range([height, 0]);

  const line = d3
    .line<any>()
    .defined((d: any): any => !isNaN(d.value))
    .x((d: any): any => scaleX(d.label))
    .y((d: any): any => scaleY(d.value));

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
        />
      </g>
    </svg>
  );
}
