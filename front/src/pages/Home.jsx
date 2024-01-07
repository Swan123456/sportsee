import React from "react";
import { NavLink } from "react-router-dom";
import { Main, Title } from "../styles/homeStyle";

export default function Home (){
    
  return (
    <Main>
      <Title>Select USER</Title>
      <NavLink to="user/12">👦 Jean </NavLink>
      <NavLink to="user/18">👩 David </NavLink>
    </Main>
  );
};