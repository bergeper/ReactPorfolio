//import logo from "../../assets/CompPurp.png";
import { HeroDesc } from "../styled/Hero/HeroDesc";
//import { HeroImg } from "../styled/Hero/HeroImg";
//import { HeroImgContainer } from "../styled/Hero/HeroImgContainer";
import { HeroImgSection } from "../styled/Hero/HeroImgSection";
import { HeroTitle } from "../styled/Hero/HeroTitle";
import { HeroTitleSection } from "../styled/Hero/HeroTitleSection";
export const Hero = () => {
  /*
  <HeroImgContainer>
    <HeroImg src={logo}></HeroImg>
  </HeroImgContainer>
  */
  return (
    <>
      <HeroTitleSection>
        <HeroTitle>Hi, I am</HeroTitle>
        <HeroTitle>Per</HeroTitle>
        <HeroDesc>Front-End Developer</HeroDesc>
      </HeroTitleSection>
      <HeroImgSection></HeroImgSection>
    </>
  );
};
