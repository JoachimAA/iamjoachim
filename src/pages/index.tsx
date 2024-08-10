import * as React from "react";
import PageLayout from "../components/PageLayout";
import H2 from "../components/typography/H2";
import Body from "../components/typography/Body";
import { HeadFC } from "gatsby"

export default function HomePage() {
  return (
    <>
      <H2 message="I am Joachim Arthey" />
      <Body message="I am a software devloper based in Northamptonshire. Here you can find some of my personal project that I have worked on in my spare time." />
    </>
  );
}

export const Head: HeadFC = () => <title>I am Joachim Arthey</title>
