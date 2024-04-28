import React from "react";
import Header from "./header/Header";
import Footer from "./Footer";
import styled from "styled-components";

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
  flexGrow: "1",
  padding: "24px 16px",
  maxWidth: "600px",
  margin: "auto",
});
