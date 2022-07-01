import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Stables from './Pages/Stables';
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
