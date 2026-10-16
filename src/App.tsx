import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";
import PegSolitairePage from "./pages/PegSolitairePage";
import HorticulturePage from "./pages/HorticulturePage";
import ModelRailwayPage from "./pages/ModelRailwayPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/peg-solitaire/" element={<PegSolitairePage />} />
        <Route path="/horticulture/" element={<HorticulturePage />} />
        <Route path="/model-railway/" element={<ModelRailwayPage />} />
      </Routes>
    </BrowserRouter>
  );
}
