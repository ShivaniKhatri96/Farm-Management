import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/header/Header";
import Dashboard from "./pages/dashboard/Dashboard";
import Data from "./pages/data/Data";
import Groups from "./pages/groups/Groups";
import Settings from "./pages/settings/Settings";
import Stables from "./pages/stables/Stables";
import Welcome from "./pages/welcome/Welcome";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/stables" element={<Stables />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/data" element={<Data />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
