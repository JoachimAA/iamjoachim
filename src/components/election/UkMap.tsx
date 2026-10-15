import React from "react";
import Hexagon from "./Hexagon";
import hexes from "./hexjson";

export default function UkMap() {
  const lengthOfSide = 20;
  const width = lengthOfSide * 2;
  const height = (width * Math.sqrt(3)) / 2;

  const constituencies = Object.values(hexes.hexes);
  console.log("hexes -> ", constituencies);

  return (
    <svg width="1000" height="1000" viewBox="0 0 1000 1000" fill="none">
      {constituencies.map((con, idx) => {
        const startX = 30 * Math.abs(con.q);
        const startY = 30 * Math.abs(con.r);

        console.log("startx -> ", startX);
        console.log("starty -> ", startY);

        return (
          <g key={idx}>
            <Hexagon lengthOfSide={20} startX={startX} startY={startY} />
          </g>
        );
      })}
    </svg>
  );
}
