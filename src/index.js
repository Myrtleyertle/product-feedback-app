import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataState } from "./context/data/dataState";
import { RoadmapPage } from "./components/roadmap/RoadMapPage";
ReactDOM.render(
  <DataState>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/RoadmapPage" element={<RoadmapPage />} />
      </Routes>
    </BrowserRouter>
  </DataState>,
  document.getElementById("root")
);
