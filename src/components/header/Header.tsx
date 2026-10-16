import styled from "styled-components";
import HeaderButton from "./HeaderButton";
import { BiHome as HomeIcon } from "react-icons/bi";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  return (
    <Root>
      <HomeButton onClick={() => navigate("/")}>
        <HomeIcon color="var(--secondary-color)" size={30} />
      </HomeButton>
      <HeaderButtonsContainer>
        <HeaderButton message="Peg solitaire" path="/peg-solitaire" />
        {/* <HeaderButton message="Energy" path="/energy" /> */}
        <HeaderButton message="Horticulture" path="/horticulture" />
        <HeaderButton message="Model railway" path="/model-railway" />
      </HeaderButtonsContainer>
    </Root>
  );
}

const HomeButton = styled("div")({
  height: "30px",
  gridArea: "1",
  cursor: "pointer",
  width: "30px",
  justifySelf: "center",
});

const HeaderButtonsContainer = styled("div")({
  display: "flex",
  gap: "24px",
  justifyContent: "center",
});

const Root = styled("div")({
  width: "100vw",
  height: "70px",
  backgroundColor: "var(--primary-color)",
  display: "grid",
  gridTemplateColumns: "100px auto 100px",
  alignItems: "center",
});
