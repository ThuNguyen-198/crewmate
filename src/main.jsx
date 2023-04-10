import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./routes/Layout";
import CreateCrewmate from "./Components/CreateCrewmate";
import CrewmatesGallery from "./Components/CrewmatesGallery";
import CrewmateDetail from "./Components/CrewmateDetail";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} path="/" element={<App />} />
          <Route
            index={false}
            path="/create-crew-mate"
            element={<CreateCrewmate />}
          />
          <Route
            index={false}
            path="/crewmates-gallery"
            element={<CrewmatesGallery />}
          />
          <Route
            index={false}
            path="/crewmates-gallery"
            element={<CrewmatesGallery />}
          />
          <Route
            index={false}
            path="/crewmates-gallery/:id"
            element={<CrewmateDetail />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
