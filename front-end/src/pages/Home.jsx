import React from "react";
import { NavLink } from "react-router-dom";
import { Main, Title } from "../styles/homeStyle";

/**
 * Composant représentant la page d'accueil.
 * @component
 * @returns {JSX}
 */
export default function Home (){
    
  return (
    <Main>
      <Title>Select USER</Title>
      <NavLink to="user/12">👦 Karl </NavLink>
      <NavLink to="user/18">👩 Cecilia </NavLink>
    </Main>
  );
};