import React from 'react';
import Home from './pages/Home';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

export default function App() {
    
  return (
    <BrowserRouter>
      <Header />
      <SideBar />
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
