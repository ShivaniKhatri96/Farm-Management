import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/layout/header/Header";
import Dashboard from "./pages/Dashboard";
import Data from "./pages/Data";
import Groups from "./pages/Groups";
import Settings from "./pages/Settings";
import Stables from "./pages/Stables";
import Welcome from "./pages/Welcome";

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
