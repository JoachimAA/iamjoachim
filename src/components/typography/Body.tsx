import styled from "styled-components";

interface BodyProps {
  message: string;
}

export default function Body({ message }: BodyProps) {
  return <BodyRoot>{message}</BodyRoot>;
}

const BodyRoot = styled("p")({
  margin: "0px",
});
