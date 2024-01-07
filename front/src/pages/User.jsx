import React from "react";
import { getData } from "../utils/getData";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Main } from "../styles/homeStyle";
import UserInfos from "../components/UserInfos";

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
    </Main>
  );
};
