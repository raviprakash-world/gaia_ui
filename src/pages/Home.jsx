import React from "react";
import styled from "styled-components";
import UpperAnnouncement from "../components/UpperAnnouncement.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";


const MainContainer = styled.div`
  background-color: whitesmoke;
`;

const Home = () => {
  return (
    <div>
      <MainContainer>
        <UpperAnnouncement />
        <Navbar/>
        <Footer/>
      </MainContainer>
      
    </div>
  );
};

export default Home;
