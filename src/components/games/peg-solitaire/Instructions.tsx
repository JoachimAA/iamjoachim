import React from "react";
import H3 from "../../typography/H3";
import Body from "../../typography/Body";

export default function Instructions() {
  return (
    <div>
      <H3 message="Instructions" />
      <Body message="The aim of peg solitaire is to remove the pegs one by one by jumping over other pegs into empty holes. The board starts with just one hole in the middle." />
    </div>
  );
}
