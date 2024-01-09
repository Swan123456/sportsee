import React, {useState,useEffect} from 'react';
import { Container } from "../styles/userPerformanceStyle";
import { getData } from '../utils/getData';
import { useParams } from 'react-router';
import {Radar,RadarChart,PolarGrid,PolarAngleAxis,ResponsiveContainer} from "recharts";
import { formatDataPerf } from '../models/formatDataPerf';

/**
 * Render a RadarChart with user performance data
 * @return {JSX}
 */

 export default function UserPerformance() {
     
    const [data, setData] = useState([]);
	const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const request = await getData("USER_PERFORMANCE", id);
                if (!request) return alert('data error');
                const formattedData = formatDataPerf(request.data.data);
                setData(formattedData);
            } catch (error) {
                console.error("Une erreur s'est produite lors de la récupération des données de performance de l'utilisateur :", error.message);
            }
        };
        fetchData();
    }, [id]);
	if (data.length === 0) return null;
	
    return ( 
    <Container>
            <ResponsiveContainer width="100%" height="100%">
				<RadarChart cx='50%' cy='50%' outerRadius='65%' data={data}>
						<PolarGrid gridType="polygon" />
						<PolarAngleAxis	dataKey="kind" stroke='white' tickLine={false} axisLine={false}  tick={{ fontSize: 10 }}/>
						<Radar dataKey='value' stroke='#FF0101'	fill='#FF0101' fillOpacity={0.7} />
				</RadarChart>
            </ResponsiveContainer>
    </Container> );
}

 