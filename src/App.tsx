import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/layout/header/Header";
import Dashboard from "./pages/dashboard/Dashboard";
import Data from "./pages/data/Data";
import Groups from "./pages/groups/Groups";
import Settings from "./pages/settings/Settings";
import Stables from "./pages/stables/Stables";
import Welcome from "./pages/welcome/Welcome";
import UserService from "./services/UserService";
function App() {
  return (
    <div>
      <Routes>
        {!UserService.isLoggedIn() && <Route path="/" element={<Welcome />} />}
        {UserService.isLoggedIn() && <Route path="/" element={<Dashboard />} />}
        {UserService.isLoggedIn() && (
          <Route path="/stables" element={<Stables />} />
        )}
        {UserService.isLoggedIn() && (
          <Route path="/groups" element={<Groups />} />
        )}
        {UserService.isLoggedIn() && <Route path="/data" element={<Data />} />}
        {UserService.isLoggedIn() && (
          <Route path="/settings" element={<Settings />} />
        )}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
