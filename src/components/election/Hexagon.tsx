import React from "react";

interface HexagonProps {
  lengthOfSide: number;
  startX: number;
  startY: number;
}

export default function Hexagon({
  lengthOfSide,
  startX,
  startY,
}: HexagonProps) {
  const width = lengthOfSide * 2;
  const height = (width * Math.sqrt(3)) / 2;

  const flatTop = `
  M ${startX} ${startY} 
  l ${width / 4} ${-height / 2} 
  l ${-(width / 4 - (width * 3) / 4)} 0 
  l ${width - (width * 3) / 4} ${height / 2} 
  l ${-(width - (width * 3) / 4)} ${height / 2} 
  l ${width / 4 - (width * 3) / 4} 0 z
  `;

  const pointyTop = `
    M ${startX} ${startY}
    l ${width / 2} ${height / 4}
    l 0 ${height / 2}
    l ${-(width / 2)} ${height / 4}
    l ${-(width / 2)} ${-(height / 4)}
    l 0 ${-(height / 2)}
    `;

  return <path d={pointyTop} fill="#000" strokeWidth="3" stroke="blue" />;
}
