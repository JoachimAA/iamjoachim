import styled from "styled-components";
import HeaderButton from "./HeaderButton";

export default function Header() {
  return (
    <Root>
      <HeaderButton message="Home" path="/" />
      <NavDot />
      <HeaderButton message="Peg solitaire" path="/peg-solitaire/" />
      <NavDot />
      {/* <HeaderButton message="Energy" path="/energy" /> */}
      <HeaderButton message="Garden" path="/garden/" />
      <NavDot />
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

const NavDot = styled("span")({
  width: "3px",
  height: "3px",
  borderRadius: "30px",
  backgroundColor: "#252654",
  flexShrink: 0,
});
