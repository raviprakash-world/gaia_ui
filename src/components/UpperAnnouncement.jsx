import React from "react";
import styled, { keyframes } from "styled-components";

const colorChange = keyframes`
     0%   {background-color: #22242B;}
    50%  {background-color: #22242B;}
    100% {background-color: #4C4C4A;}
`;

const Container = styled.div`
  /* height: 80%; */
  display: flex;
  justify-content: center;
  font-weight: 600;
  color: #fff;
  animation: ${colorChange} 4s infinite linear;
`;

const UpperAnnouncement = () => {
  return (
    <div>
      <Container>
        <div style={{ marginTop: "10px" }}>
          <p>NEW YEAR SALE!!! upto 50% OFF Hury...!</p>
        </div>
      </Container>
    </div>
  );
};

export default UpperAnnouncement;
