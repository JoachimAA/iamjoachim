import "./src/styles/global.css";
import React from "react";
import PageLayout from "./src/components/PageLayout";

export function onRouteUpdate({ location, prevLocation }: any) {
  console.log("new pathname", location.pathname);
  console.log("old pathname", prevLocation ? prevLocation.pathname : null);
}

export function wrapPageElement({ element, props }) {
  return <PageLayout {...props}>{element}</PageLayout>;
}
