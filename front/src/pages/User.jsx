import React from "react";
import { getData } from "../utils/getData";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Main } from "../styles/homeStyle";

/**Render the dashboard
 * @return {JSX}
 */
 export default function User() {
  const [data, setData] = useState([]);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchData = async () => {
      const request = await getData("USER_MAIN_DATA", id);
      if (!request) {
        console.error("Erreur de données");
        return alert("Erreur de données");
      }
      setData(request.data);

      // Ajout d'un console.log pour afficher les données récupérées
      console.log("Données récupérées de l'API :", request.data);
    };
    fetchData();
  }, [id]);
  return (
    <Main>
    </Main>
  );
};
