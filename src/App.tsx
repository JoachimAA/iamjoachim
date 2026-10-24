import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";
import PegSolitairePage from "./pages/PegSolitairePage";
import GardenPage from "./pages/garden/GardenPage";
import ModelRailwayPage from "./pages/model-railway/ModelRailwayPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/peg-solitaire/" element={<PegSolitairePage />} />
        <Route path="/garden/" element={<GardenPage />} />
        <Route path="/model-railway/" element={<ModelRailwayPage />} />
      </Routes>
    </BrowserRouter>
  );
}
