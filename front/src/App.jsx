import React from 'react';
import Home from './pages/Home';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import User from "./pages/User";
import Error from './pages/Error';

/**
 * Composant principal représentant l'application.
 * @component
 * @example
 * // Exemple d'utilisation du composant App
 * <App />
 * @returns {JSX.Element} - Le composant App.
 */
export default function App() {
    
  return (
    <BrowserRouter>
      <Header />
      <SideBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
