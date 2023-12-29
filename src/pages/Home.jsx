import React from "react";
import styled from "styled-components";
import UpperAnnouncement from "../components/UpperAnnouncement.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Banner from "../components/Banner.jsx";
import LowerAnnouncement from "../components/LowerAnnouncement.jsx";
import Slider from "../components/Slider.jsx";
import Items from "../components/Items.jsx";


const MainContainer = styled.div`
  background-color: whitesmoke;
`;

const Home = () => {
  return (
    <div>
      <MainContainer>
        <UpperAnnouncement />
        <Navbar/>
        <LowerAnnouncement/>
        <Slider/>
        <Items/>
        <Banner/>
        <Footer/>
      </MainContainer>
      
    </div>
  );
};

export default Home;
