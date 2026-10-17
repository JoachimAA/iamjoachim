import styled from "styled-components";

interface H3Props {
  message: string;
}

export default function H3({ message }: H3Props) {
  return <H3Root>{message}</H3Root>;
}

const H3Root = styled("h3")({
  margin: "0px",
  color: "var(--primary-color)",
});
