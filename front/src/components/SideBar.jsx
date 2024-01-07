import React from "react";
import iconMeditation from "../assets/iconMeditation.svg";
import iconBike from "../assets/iconBike.svg";
import iconSwiming from "../assets/iconSwiming.svg";
import iconDumbBell from "../assets/iconDumbBell.svg";
import { NavLink } from "react-router-dom";
import { Container, Nav, Wrapper, NavText } from "../styles/sideBarStyle";

/**
 * Composant représentant la barre latérale de navigation.
 * @component
 * @example
 * // Exemple d'utilisation du composant SideBar
 * <SideBar />
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.someProp - Une propriété exemple.
 * @returns {JSX.Element} - Le composant SideBar.
 */
export default function SideBar(){
  return (
    <Container>
      <Nav>
        <Wrapper>
          <NavLink to="#">
            <img src={iconMeditation} alt="Meditation" />
          </NavLink>
          <NavLink to="#">
            <img src={iconSwiming} alt="Swiming" />
          </NavLink>
          <NavLink to="#">
            <img src={iconBike} alt="Bike" />
          </NavLink>
          <NavLink to="#">
            <img src={iconDumbBell} alt="Dumb-Bell" />
          </NavLink>
        </Wrapper>
        <NavText>Copyright, SportSee 2024</NavText>
      </Nav>
    </Container>
  );
};

