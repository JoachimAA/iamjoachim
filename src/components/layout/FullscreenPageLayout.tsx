import styled from "styled-components";
import type { JSX } from "react/jsx-runtime";
import Header from "../header/Header";
import Footer from "../Footer";

interface FullScreenPageLayoutProps {
  children: JSX.Element;
}

export default function FullScreenPageLayout({
  children,
}: FullScreenPageLayoutProps) {
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
  width: "100%",
  height: "100dvh",
  boxSizing: "border-box",
  overflow: "hidden",
});

const ContentContainer = styled("main")({
  flex: "1 1 0",
  minHeight: 0,
  minWidth: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "8px 16px",
  boxSizing: "border-box",
  overflow: "hidden",
});
