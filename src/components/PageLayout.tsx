import Header from "./header/Header";
import Footer from "./Footer";
import styled from "styled-components";
import type { JSX } from "react/jsx-runtime";
import { breakpoints } from "../styles/breakpoints";

interface PageLayoutProps {
  children: JSX.Element;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <Layout>
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </Layout>
  );
}

const Layout = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  width: "100vw",
  boxSizing: "border-box",
  border: "8px",
});

const ContentContainer = styled("div")({
  flexGrow: 1,
  margin: "64px 256px",

  [`@media (max-width: ${breakpoints.large}px)`]: {
    margin: "64px 128px",
  },

  [`@media (max-width: ${breakpoints.medium}px)`]: {
    margin: "64px",
  },

  [`@media (max-width: ${breakpoints.large}px)`]: {
    margin: "32px 16px",
  },
});
