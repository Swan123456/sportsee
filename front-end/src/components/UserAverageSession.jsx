import React, { useState, useEffect } from "react";
import { Container, Title } from "../styles/userAverageSessionStyle";
import { getData } from '../utils/getData';
import { useParams } from "react-router";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import SessionsToolType from "./SessionsToolTypes";
import { formatDataAverageSession } from "../models/formatDataAverageSession";

/**
 * Render a LineChart with user average sessions Data
 * @return {JSX}
 */

 export default function UserAverageSessions() { 
     
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
        try {
            const request = await getData("USER_AVERAGE_SESSIONS", id);
            if (!request) return alert("data error");
            const formattedData = formatDataAverageSession(request.data.sessions);
            setData(formattedData);
        } catch (error) {
            console.error("Une erreur s'est produite lors de la récupération des données de sessions moyennes de l'utilisateur :", error.message);
        }
    };
    fetchData();
  }, [id]);
  if (data.length === 0) return null;

  return (
    <Container>
      <Title>Durée moyenne des sessions</Title>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} strokeWidth={1} 
             onMouseMove={(e) => {
                if (e.isTooltipActive === true) {
                  let div = document.querySelector('.jhHjJs')
                  if (div) {
                    let windowWidth = div.clientWidth
                    let mouseXpercentage = Math.round(
                        (e.activeCoordinate.x / windowWidth) * 100
                    )
                    // @ts-ignore
                    div.style.background = `linear-gradient(90deg, rgba(255, 0, 0, 1) ${mouseXpercentage}%, rgba(175, 0, 0, 1) ${mouseXpercentage}%, rgba(208, 47, 13, 1) 100%)`;
                  }
                }
              }}
        >
          <XAxis
            type="category"
            dataKey="day"
            tickLine={true}
            stroke="red"
            padding={{right:5, left:5}}
            tick={{ fontSize: 13, stroke: "white", opacity: 0.8}}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 30"]}
            hide={true}
          />
          <Tooltip content={<SessionsToolType />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}
