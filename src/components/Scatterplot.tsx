import * as d3 from "d3";
import AxisLeft from "./AxisLeft";
import AxisBottom from "./AxisBottom";
import { Item } from "src/@types/data";
import { useState } from "react";
import { InteractionData, Tooltip } from "./Tooltip";

const MARGIN = { top: 60, right: 60, bottom: 60, left: 60 };

type ScatterplotProps = {
  width: number;
  height: number;
  data: Item[];
};

const Scatterplot = ({ width, height, data }: ScatterplotProps) => {
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const yScale = d3.scaleLinear().domain([10, 1000]).range([boundsHeight, 0]);
  const xScale = d3.scaleLinear().domain([1, 12]).range([0, boundsWidth]);

  const [hovered, setHovered] = useState<InteractionData | null>(null);

  const allGroups = data.map((d) => String(d.belongGroupId));
  const colorScale = d3
    .scaleOrdinal<string>()
    .domain(allGroups)
    .range(["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"]);

  const allShapes = data.map((d, i) => {
    return (
      <circle
        key={i}
        r={8}
        cx={xScale(d.tag)}
        cy={yScale(d.amount)}
        stroke={colorScale(String(d.belongGroupId))}
        fill={colorScale(String(d.belongGroupId))}
        fillOpacity={0.7}
        onMouseEnter={() =>
          setHovered({
            xPos: xScale(d.tag),
            yPos: yScale(d.amount),
            name: d.name,
            description: d.description,
          })
        }
        onMouseLeave={() => setHovered(null)}
      />
    );
  });
  return (
    <div className="flex justify-center items-center">
      <svg width={width} height={height}>
        {/* first group is for the violin and box shapes */}
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {/* Y axis */}
          <AxisLeft yScale={yScale} pixelsPerTick={40} width={boundsWidth} />

          {/* X axis, use an additional translation to appear at the bottom */}
          <g transform={`translate(0, ${boundsHeight})`}>
            <AxisBottom
              xScale={xScale}
              pixelsPerTick={40}
              height={boundsHeight}
            />
          </g>

          {/* Circles */}
          {allShapes}
        </g>
      </svg>
      {/* Tooltip */}
      <div
        style={{
          width: boundsWidth,
          height: boundsHeight,
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          marginLeft: MARGIN.left + 20,
          marginTop: MARGIN.top + 40,
        }}
      >
        <Tooltip interactionData={hovered} />
      </div>
    </div>
  );
};

export default Scatterplot;
