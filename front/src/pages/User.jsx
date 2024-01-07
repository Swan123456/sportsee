import React from "react";
import { getData } from "../utils/getData";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Main } from "../styles/homeStyle";
import UserInfos from "../components/UserInfos";
import BarCharts from "../components/BarChart";
import { Content, BottomChart } from "../styles/userStyle";
import UserAverageSessions from "../components/UserAverageSession";

/**Render the dashboard
 * @return {JSX}
 */
 export default function User() {
  const [data, setData] = useState([]);
  const { id } = useParams(); 

  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_MAIN_DATA",id);
      if (!request) return alert("data error");
      setData(request.data);
    };
    data();
  }, [id]);
  if (data.length === 0) return null;

  return (
    <Main>
      <UserInfos name={data.userInfos.firstName} />
      <Content>
          <section>
            <BarCharts />
            <BottomChart>
              <UserAverageSessions />
            </BottomChart>
          </section>
      </Content>
    </Main>
  );
};
