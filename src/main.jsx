import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Dashboard from "./Dashboard/MainContainer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Home route → App component */}
        <Route path="/" element={<App />} />

        {/* Admin dashboard route */}
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
