

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useState } from "react";
import styled from "styled-components";
import { medium, small } from "../responsive";

const MainContainer = styled.div`
  height: 100%;
  background-color: #212734;
  color: #F8F8F8;
`;
const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  gap: 3rem;
  ${small({ display: "inline" })}
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex: 2;
   position: relative;

  @media screen and (max-width: 767px) {
    border-bottom: 0.01rem solid #DEDEDD;
    border-top: 0.01rem solid #DEDEDD;
        margin: 0px 1rem;
        padding:1rem;
     }
  
`;

const ArrowIcon = styled(KeyboardArrowDownIcon)`
@media screen and (min-width: 768px) {
    display: none !important;
  }
 @media screen and (max-width: 767px) {
  display:block;
  position: absolute;
  right: 1rem;
  top:2rem;
   transform: translateY(-50%) ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.3s ease; 
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  @media screen and (max-width: 767px) {
    padding:1rem;
    align-items: center;
  }
`;
const OwnerDiv = styled.div`
  display: flex;
  height: 3rem;
  background-color: #232421;
  color: white;
  align-items: center;
  justify-content: center;
  ${medium({ display: "block" })}
`;
const AccordionTitle = styled.div`
    max-width: 100%;
    font-size: 1.2rem;
    letter-spacing: .2em;
    text-transform: uppercase;
    color: #F8F8F8;
    text-align:start;
        align-self: start;
            margin: 0;
    padding: 0;
    padding-bottom: 1rem;
    @media screen and (max-width: 767px) {
padding-bottom: 0rem;
     }
     
`;
const FooterUl = styled.ul`
       margin: 0;
    padding: 0;
    list-style: none;
     @media screen and (max-width: 767px) {
        display: none;

    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;
const FooterLink = styled.a`
  font-family: inherit;
  font-size: 13px;
  letter-spacing:3px;
  line-height:20px;
  cursor: pointer;
  padding: 0;
  position: relative;
  border: none;
  box-shadow: none;
  text-decoration: none;
  color: rgb(var(--color-link));
  background-color: transparent;
  background-image: linear-gradient(
      to top,
      rgb(var(--color-border)) 0px,
      rgb(var(--color-border)) 0px
    ),
    linear-gradient(to top, transparent 0px, transparent 0px);
  background-repeat: no-repeat;
  background-position: right bottom, right bottom;
  background-size: 0% 0.1rem, 100% 0.1rem;
  transition-property: background-size;
  transition-timing-function: ease;
  transition-duration: var(--duration-default);

  @media screen and (hover: hover) {
    &:hover {
          background-position: left bottom,left bottom;
    background-size: 100% .1rem,100% .1rem;
    text-decoration: underline;
    color:inherit
    }
  }
`;

const SocialMediaList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 16px;
`;

const SocialMediaItem = styled.li`
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
    transition: transform var(--duration-default) ease;
  }
`;

const SocialMediaLink = styled.a`
  text-decoration: none;
  color: inherit;
`;
const FooterKeyword = styled.a`

      display: inline-block;
    color: #fff;
    text-decoration: none;
    font-size: 0.9rem;
    border-right: 1.5px solid #fff;
    padding: 0 4px;
    line-height: normal;
    margin: 0;
    white-space: nowrap;
`;

const CopyrightContent = styled.small`
  a {
    text-decoration: none;
    color: rgb(var(--color-link));
    background-color: transparent;
    background-image: linear-gradient(
      to top,
      rgb(var(--color-border)) 0px,
      rgb(var(--color-border)) 0px
    ),
    linear-gradient(to top, transparent 0px, transparent 0px);
    background-repeat: no-repeat;
    background-position: right bottom, right bottom;
    background-size: 0% 0.1rem, 100% 0.1rem;
    transition-property: background-size;
    transition-timing-function: ease;
    transition-duration: var(--duration-default);
    line-height: calc(1 + 0.4 / var(--font-body-scale));
  }

  @media screen and (hover: hover) {
    a:hover {
      background-position: left bottom, left bottom;
      background-size: 100% 0.1rem, 100% 0.1rem;
    }
  }
`;



const Footer = () => {

 const initialStates = [false, false,false,false]; // Add more false values if you have additional lists
  const [isOpenList, setIsOpenList] = useState(initialStates);

  const toggleDropdown = (index) => {
    const updatedStates = isOpenList.map((state, i) => (i === index ? !state : state));
    setIsOpenList(updatedStates);
  };

  return (
    <>
      <MainContainer>
        <InnerContainer>
          <Left>
          <ArrowIcon isOpen={isOpenList[0]}/>
              <AccordionTitle onClick={() => toggleDropdown(0)}>BESTSELLERS</AccordionTitle>
         
            
              <FooterUl isOpen={isOpenList[0]}><li>
                                <FooterLink>
                                  Perfume Gift Set
                                </FooterLink>
                              </li><li>
                                <FooterLink>
                                  Perfume For Him
                                </FooterLink>
                              </li><li>
                                <FooterLink>
                                  Perfume For Her
                                </FooterLink>
                              </li><li>
                                <FooterLink>
                                  Unisex Perfume
                                </FooterLink>
                              </li></FooterUl>
            
          </Left>
          <Left>
             <ArrowIcon  isOpen={isOpenList[1]}/>
         
              <AccordionTitle onClick={() => toggleDropdown(1)}>INFORMATION</AccordionTitle>
         
            
              <FooterUl isOpen={isOpenList[1]}><li>
                                <FooterLink>
                                 Refund and Return
                                </FooterLink>
                              </li><li>
                                <FooterLink>
                                  Shipping Policy
                                </FooterLink>
                              </li><li>
                                <FooterLink>
                                  Privacy Policy
                                </FooterLink>
                              </li><li>
                                <FooterLink>
                                  Terms & Conditions
                                </FooterLink>
                              </li></FooterUl>
            
          </Left>
          <Left> <ArrowIcon  isOpen={isOpenList[2]}/>
         <AccordionTitle onClick={() => toggleDropdown(2)}>SUPPORT</AccordionTitle>
         <FooterUl isOpen={isOpenList[2]}><li>
                                <FooterLink>
                                 About Us
                                </FooterLink>
                              </li><li>
                                <FooterLink>
                                  Contact Us
                                </FooterLink>
                              </li><li>
                                <FooterLink>
                                  Order Tracking
                                </FooterLink>
                              </li>
                              <li>
                                <FooterLink>
                                  All Products
                                </FooterLink>
                              </li>
                              <li>
                                <FooterLink>
                                 FAQ
                                </FooterLink>
                              </li>
                              </FooterUl>
            
          </Left>
          <Left> <ArrowIcon  isOpen={isOpenList[3]}/>
         <AccordionTitle onClick={() => toggleDropdown(3)}>CONTACT US</AccordionTitle>
         <FooterUl isOpen={isOpenList[3]}><li>
                                <FooterLink>
                                123 Scent Street, Perfumeland
                                </FooterLink>
                              </li><li>
                                <FooterLink>
                                  info@gaiafragrances.com
                                </FooterLink>
                              </li><li>
                                <FooterLink>
                                  1-800-GAGA-SCENT
                                </FooterLink>
                              </li>
                           
                              <li>
                                <FooterLink>
                                 Timing: 10:00 AM to 7:00 PM, Monday to Sunday
                                </FooterLink>
                              </li>
                              </FooterUl>
            
          </Left>
          
          <Right>
           <SocialMediaList>
      <SocialMediaItem>
        <SocialMediaLink href="https://www.facebook.com/bellavitaorganic" target="_blank" rel="noopener">
          <FacebookIcon />
        </SocialMediaLink>
      </SocialMediaItem>
      <SocialMediaItem>
        <SocialMediaLink href="https://twitter.com/bellavita_org?s=08" target="_blank" rel="noopener">
          <TwitterIcon />
        </SocialMediaLink>
      </SocialMediaItem>
      <SocialMediaItem>
        <SocialMediaLink href="https://in.pinterest.com/BellaVitaOrg" target="_blank" rel="noopener">
          <PinterestIcon />
        </SocialMediaLink>
      </SocialMediaItem>
      <SocialMediaItem>
        <SocialMediaLink href="https://www.instagram.com/bellavita.official" target="_blank" rel="noopener">
          <InstagramIcon />
        </SocialMediaLink>
      </SocialMediaItem>
      <SocialMediaItem>
        <SocialMediaLink href="https://www.youtube.com/c/BellaVitaOrganicIndia" target="_blank" rel="noopener">
          <YouTubeIcon />
        </SocialMediaLink>
      </SocialMediaItem>
    </SocialMediaList>
          </Right>
        </InnerContainer>
        <InnerContainer>
          <div class="d-none d-lg-block">
  <AccordionTitle>Most Searched Keywords</AccordionTitle>
  <div class="d-block pt-3">
    < FooterKeyword href="/collections/perfumes-for-her">Birthday Gift for Women/Girls</FooterKeyword>
    < FooterKeyword href="/collections/gift-sets">Wedding Gifts for Couples</FooterKeyword>
    < FooterKeyword href="/collections/perfumes-for-him">Gifts for Men Under 500</FooterKeyword>
    < FooterKeyword href="/collections/perfumes-for-her">Gifts for Women Under 500</FooterKeyword>
    < FooterKeyword href="/products/luxury-perfume-gift-set-for-men-4x20-ml">Birthday Gift for Men/ Boys</FooterKeyword>
    < FooterKeyword href="/pages/bulk-inquiry">Corporate Gifts</FooterKeyword>
    < FooterKeyword href="/collections/luxury-perfumes">Perfume</FooterKeyword>
    < FooterKeyword href="/collections/perfumes-for-him">Best perfume for men</FooterKeyword>
    < FooterKeyword href="/collections/perfumes-for-him">Perfume for men</FooterKeyword>
    < FooterKeyword href="/products/vitamin-c-natural-face-wash-for-acne-pimple-and-skin-brightening">Vitamin C Face Wash</FooterKeyword>
    < FooterKeyword href="/products/organic-rose-water-face-toner">Rose water for face</FooterKeyword>
    < FooterKeyword href="/collections/perfumes-for-her">Perfume for women</FooterKeyword>
    < FooterKeyword href="/collections/perfumes-for-her">Best perfume for women</FooterKeyword>
    < FooterKeyword href="/collections/perfumes-for-her">Perfume set for women</FooterKeyword>
    < FooterKeyword href="/collections/perfumes-for-him">Gift for Men</FooterKeyword>
    < FooterKeyword href="/products/vitamin-c-natural-face-wash-for-acne-pimple-and-skin-brightening">Face wash for oily skin</FooterKeyword>
    < FooterKeyword href="/collections/body-scrub">Body scrub</FooterKeyword>
    < FooterKeyword href="/products/eyelift-under-eye-cream-for-dark-circles-and-wrinkles">Dark circle</FooterKeyword>
    < FooterKeyword href="/collections/perfumes-for-her">Perfume for girls</FooterKeyword>
    < FooterKeyword href="/products/eyelift-under-eye-cream-for-dark-circles-and-wrinkles">Dark circles removal cream</FooterKeyword>
    < FooterKeyword href="/products/anti-acne-face-wash">Acne face wash</FooterKeyword>
    < FooterKeyword href="/products/vitamin-c-face-serum">Face serum for dry skin</FooterKeyword>
    < FooterKeyword href="/products/eyelift-under-eye-cream-for-dark-circles-and-wrinkles">under eye cream</FooterKeyword>
    < FooterKeyword href="/products/luxury-perfumes-gift-set-for-women-4x20-ml">Gift sets for women</FooterKeyword>
    < FooterKeyword href="/collections/body-wash">Body wash for women</FooterKeyword>
    < FooterKeyword href="/collections/face-toner">Toner for face</FooterKeyword>
    < FooterKeyword href="/products/ayurvedic-kumkumadi-face-glowing-oil">kumkumadi face glowing oil</FooterKeyword>
    < FooterKeyword href="/collections/little-luxury-perfumes-20ml">Pocket perfume for men</FooterKeyword>
    < FooterKeyword href="/products/de-tan-face-pack-for-skin-brightening">De tan face pack</FooterKeyword>
    < FooterKeyword href="/products/anti-acne-pimple-scar-removal-gel">Pimple removal cream</FooterKeyword>
    < FooterKeyword href="/products/nicolips-natural-lip-scrub">Lip scrub</FooterKeyword>
    < FooterKeyword href="/products/de-tan-face-pack-for-skin-brightening">Tan removal face pack</FooterKeyword>
    < FooterKeyword href="/products/anti-acne-face-wash">Face wash for acne</FooterKeyword>
    < FooterKeyword href="/products/ceo-man-body-wash">Body wash for men</FooterKeyword>
    < FooterKeyword href="/products/exfoliate-face-and-body-scrub-for-tan-removal">Exfoliate scrub</FooterKeyword>
    < FooterKeyword href="/products/luxury-perfume-gift-set-for-men-4x20-ml">Gift set for men</FooterKeyword>
    < FooterKeyword href="/products/exfoliate-face-and-body-scrub-for-tan-removal">Coffee Body Scrub</FooterKeyword>
    < FooterKeyword href="/collections/perfumes-for-him">Best long lasting perfume for men</FooterKeyword>
    < FooterKeyword href="/collections/face-serum">Face serum for glowing skin</FooterKeyword>
    < FooterKeyword href="/collections/perfumes-for-him">Perfumes for men under 500</FooterKeyword>
    < FooterKeyword href="/collections/perfumes-for-her">Perfumes for women under 500</FooterKeyword>
    < FooterKeyword href="/collections/gift-sets">Perfume gift sets</FooterKeyword>
    < FooterKeyword href="/products/ceo-oud-unisex-perfume">Oud perfume</FooterKeyword>
    < FooterKeyword href="/products/ceo-man-perfume-office-wear-with-long-lasting-top-hints">Ceo perfume</FooterKeyword>
    < FooterKeyword href="/products/eyelift-under-eye-cream-for-dark-circles-and-wrinkles">Under eye cream for dark circles</FooterKeyword>
    < FooterKeyword href="/products/anti-acne-pimple-scar-removal-gel">Acne cream</FooterKeyword>
    < FooterKeyword href="/products/vitamin-c-face-cream">Vitamin c cream for face</FooterKeyword>
    < FooterKeyword href="/products/rose-woman-body-lotion">Body lotion for women</FooterKeyword>
    < FooterKeyword href="/collections/perfumes-for-her">Long lasting perfume for women</FooterKeyword>
    < FooterKeyword href="/products/luxury-perfumes-gift-set-for-women-4x20-ml">Perfume gift pack for her</FooterKeyword>
    < FooterKeyword href="/products/luxury-perfume-gift-set-for-men-4x20-ml">Perfume gift pack for him</FooterKeyword>
    < FooterKeyword href="/products/activated-charcoal-face-wash">Charcoal face wash</FooterKeyword>
  </div>
</div>
        </InnerContainer>
      </MainContainer>
      <OwnerDiv>
        <div class=" d-flex p-2">
          <CopyrightContent>
        © 2023, <a href="/" title="">Bella Vita Organic (IDAM Natural Wellness Pvt. Ltd.)</a>.
      </CopyrightContent>
          <ul class="policies list-unstyled">
      </ul>
        </div>
      </OwnerDiv>
    </>
  );
};

export default Footer;
