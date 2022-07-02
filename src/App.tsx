import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Stables from "./pages/Stables";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/stables" element={<Stables />} />
      </Routes>
    </div>
  );
}

export default App;
