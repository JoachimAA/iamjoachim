import "./src/styles/global.css";
import React from "react";
import PageLayout from "./src/components/PageLayout";

export function onRouteUpdate({ location, prevLocation }: any) {}

export function wrapPageElement({ element, props }) {
  return <PageLayout {...props}>{element}</PageLayout>;
}
