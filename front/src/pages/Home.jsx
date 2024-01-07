import React from "react";
import { NavLink } from "react-router-dom";
import { Main, Title } from "../styles/homeStyle";

/**
 * Composant représentant la page d'accueil.
 * @component
 * @example
 * // Exemple d'utilisation du composant Home
 * <Home />
 * @returns {JSX.Element} - Le composant Home.
 */
export default function Home (){
    
  return (
    <Main>
      <Title>Select USER</Title>
      <NavLink to="user/12">👦 Jean </NavLink>
      <NavLink to="user/18">👩 David </NavLink>
    </Main>
  );
};