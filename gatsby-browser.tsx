import "./src/styles/global.css";
import React from "react";
import PageLayout from "./src/components/PageLayout";
import { createRoot } from "react-dom/client";

export function onRouteUpdate({ location, prevLocation }: any) {}

export const replaceHydrateFunction = () => {
  return (element, container) => {
    const root = createRoot(container);
    root.render(element);
  };
};

export function wrapPageElement({ element, props }) {
  return <PageLayout {...props}>{element}</PageLayout>;
}
