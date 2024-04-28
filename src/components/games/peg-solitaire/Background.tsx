import React from "react";
import styled from "styled-components";

export default function Background() {
  return (
    <>
      <UpDown />
      <Across />
    </>
  );
}

const UpDown = styled("div")({
  backgroundColor: "#E5E4E2",
  gridArea: "1/3/8/6",
  borderRadius: "30px",
});

const Across = styled("div")({
  backgroundColor: "#E5E4E2",
  gridArea: "3/1/6/8",
  borderRadius: "30px",
});
