import styled from "styled-components";
import HeaderButton from "./HeaderButton";

export default function Header() {
  return (
    <Root>
      <HeaderButton message="Home" path="/" />
      <span>•</span>
      <HeaderButton message="Peg solitaire" path="/peg-solitaire/" />
      <span>•</span>
      {/* <HeaderButton message="Energy" path="/energy" /> */}
      <HeaderButton message="Horticulture" path="/horticulture/" />
      <span>•</span>
      <HeaderButton message="Model railway" path="/model-railway/" />
    </Root>
  );
}

const Root = styled("div")({
  display: "flex",
  justifyContent: "center",
  width: "100vw",
  height: "70px",
  alignItems: "center",
  gap: "16px",
});
