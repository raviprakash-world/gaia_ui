import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import UpperAnnouncement from "../components/UpperAnnouncement";
import LowerAnnouncement from "../components/LowerAnnouncement";
import Slider from "../components/Slider";
import Brands from "../components/Brands";
import Items from "../components/Items";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const MainContainer = styled.div`
  background-color: whitesmoke;
`;

const Home = () => {
  return (
    <div>
      <MainContainer>
        <UpperAnnouncement />
        <Navbar />
        <LowerAnnouncement />
        <Slider />
        <Brands />
        <Items />
        <Banner/>
        <Footer />
      </MainContainer>
    </div>
  );
};

export default Home;
