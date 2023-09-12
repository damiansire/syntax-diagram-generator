import React from "react";
import { RectangleProps } from "./Rectangle.types";

const Rectangle: React.FC<RectangleProps> = ({ width, height, text }) => {
  return (
    <svg width={width} height={height}>
      <rect width={width} height={height} fill="lightblue" />
      <text
        x={width / 2}
        y={height / 2}
        textAnchor="middle"
        alignmentBaseline="middle"
        fill="black"
      >
        {text}
      </text>
    </svg>
  );
};

export default Rectangle;
