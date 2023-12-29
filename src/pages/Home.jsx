import React from "react";
import styled from "styled-components";
import UpperAnnouncement from "../components/UpperAnnouncement.jsx";


const MainContainer = styled.div`
  background-color: whitesmoke;
`;

const Home = () => {
  return (
    <div>
      <MainContainer>
        <UpperAnnouncement />
      </MainContainer>
      
    </div>
  );
};

export default Home;
