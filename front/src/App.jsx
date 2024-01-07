import React from 'react';
import Home from './pages/Home';
import { Route, Routes, BrowserRouter } from "react-router-dom";

export default function App() {
    
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
