import Header from "../components/header/Header";
import styled from "styled-components";
import H3 from "../components/typography/H3";
import HomeImage from "../assets/photos/Home.jpg";

export default function HomePage() {
  return (
    <HomePageContainer>
      <Header />
      <TextContainer>
        <BigText message="Joachim Arthey" />
        <H3 message="A place for my projects and passions." />
      </TextContainer>
    </HomePageContainer>
  );
}

const TextContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: "1",
  marginBottom: "100px",
});

const HomePageContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  width: "100vw",
  backgroundImage: `url(${HomeImage})`,
  backgroundRepeat: "none",
  backgroundSize: "cover",
});

interface BigTextProps {
  message: string;
}

function BigText({ message }: BigTextProps) {
  return <BigTextContainer>{message}</BigTextContainer>;
}

const BigTextContainer = styled("p")({
  margin: "0px",
  fontSize: "80px",
  fontFamily: "var(--font-family-heading)",
  color: "var(--primary-color)",
});
