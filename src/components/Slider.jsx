import React from "react";
import { Carousel } from "react-responsive-carousel";
// carousel css file
import "react-responsive-carousel/lib/styles/carousel.min.css";

// images
import nykaa from "../assets/btl_img/ODAyjq7WmQMGL77x8Zd3J12N-image-maker (1).jpg";
import colorpop from "../assets/btl_img/ODAyjq7WmQMGL77x8Zd3J12N-image-maker.jpg";
import eyeliner from "../assets/btl_img/Screenshot 2023-12-15 000426.jpg";
import all from "../assets/btl_img/Screenshot 2023-12-15 000551.jpg";
import all1 from "../assets/sliderImages/all2.gif";
import styled from "styled-components";
import { small } from "../responsive";

const SliderDiv = styled.div`
  ${small({ display: "none" })}
`;

const Slider = () => {
  return (
    <SliderDiv>
      <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
        <div>
          <img
            height="300rem"
            style={{ objectFit: "cover" }}
            src={all}
            alt="slideimage"
          />
        </div>
        <div>
          <img
            height="300rem"
            // style={{ objectFit: "cover" }}
            src={nykaa}
            alt="slideimage"
          />
        </div>
        <div>
          <img
            height="300rem"
            style={{ objectFit: "cover" }}
            src={colorpop}
            alt="slideimage"
          />
        </div>
        <div>
          <img
            height="300rem"
            style={{ objectFit: "cover" }}
            src={eyeliner}
            alt="slideimage"
          />
        </div>
        <div>
          <img
            height="300rem"
            style={{ objectFit: "cover" }}
            src={all1}
            alt="slideimage"
          />
        </div>
      </Carousel>
    </SliderDiv>
  );
};

export default Slider;
