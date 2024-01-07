import React from "react";
import {Head, Nav}  from "../styles/headerStyle";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

/**
 * Composant représentant la barre latérale de navigation.
 * @component
 * @example
 * // Exemple d'utilisation du composant SideBar
 * <SideBar someProp="exemple" />
 * @param {Object} props - Les propriétés du composant.
 * @param {string} [props.someProp] - Une propriété exemple.
 * @returns {JSX.Element} - Le composant SideBar.
 */
export default function Header() {
    
  return (
    <Head>
      <img src={logo} alt="sportSee" aria-label="logo sportSee" />
      <Nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="#">Profil</NavLink>
        <NavLink to="#">Réglages</NavLink>
        <NavLink to="#">Communauté</NavLink>
      </Nav>
    </Head>
  );
};

