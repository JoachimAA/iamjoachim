import { mkdirSync, copyFileSync } from "node:fs";

const routes = ["peg-solitaire", "horticulture", "model-railway"];

for (const route of routes) {
  const routeDir = `dist/${route}`;

  mkdirSync(routeDir, { recursive: true });
  copyFileSync("dist/index.html", `${routeDir}/index.html`);

  console.log(`Created ${routeDir}/index.html`);
}
