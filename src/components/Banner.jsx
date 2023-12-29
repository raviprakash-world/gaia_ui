import React from 'react';
import styled from 'styled-components';
import bannerImg from "../assets/btl_img/ODAyjq7WmQMGL77x8Zd3J12N-image-maker (1).jpg";

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: initial;
  background-color: rgba(var(--color-overlay), var(--color-overlay-opacity));
  
  
`;

const BannerMedia = styled.div`
  width: 100%;
  position: relative;
//   z-index: -1;

  /* Additional styles can be added here */
   @media screen and (max-width: 767px) {
    height:400px;
   }
`;

const BannerContent = styled.div`
  padding: 0;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  top: 0;

  /* Additional styles can be added here */
`;

const BannerBox = styled.div`
  border: 0;
  padding: 4rem 3.5rem;
  position: relative;
  z-index: 2;
  height: fit-content;
  align-items: center;
  width: 100%;
  text-align: center;

  /* Additional styles can be added here */
`;

const BannerHeading = styled.h2`
  margin-bottom: 0;
  line-height: 1.2;
  letter-spacing: 0.02em;

  /* Additional styles can be added here */
`;

const BannerText = styled.div`
  /* Additional styles can be added here */
`;

const BannerButton = styled.a`
  /* Additional styles can be added here */
`;


const BannerImage = styled.img`
  width: 100%; 
  height: auto;
   @media screen and (max-width: 767px) {
    //  width: auto;
  height: 100%; 
   }
`;
const Banner = () => {
  return (
    <BannerContainer>
      <BannerMedia>
        <BannerImage src={bannerImg} alt="Banner Image"/>
      
      <BannerContent>
        <BannerBox>
          <BannerHeading className="banner__heading h1">DISCOVER THE ART OF PERFUMERY</BannerHeading>
          <BannerText className="banner__text typeset2 rte">
            <p>Our formulations have proven efficacy, contain certified ingredients only and are 100% cruelty free</p>
          </BannerText>
          <BannerButton className="button button--medium" href="/collections/luxury-perfumes">
            Fragrances
          </BannerButton>
        </BannerBox>
      </BannerContent>
      </BannerMedia>
    </BannerContainer>
  );
};

export default Banner;
