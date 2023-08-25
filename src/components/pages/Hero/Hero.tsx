import { Fade, Slide } from "react-awesome-reveal";
import { HeroTitleContainer } from "../../styled/Hero/HeroTitleContainer";
import { HeroDescTitle, HeroTitle } from "../../styled/Hero/HeroTitle";
import { HeroTitleSection } from "../../styled/Hero/HeroTitleSection";
import { BottomNavigation } from "../../navigation/BottomNavigation";
import { StyledHeader } from "../../styled/StyledHeader";
import { HeroDescSection } from "../../styled/Hero/HeroDescSection";
import { HeroDescContainer } from "../../styled/Hero/HeroDescContainer";
import { HeroDesc } from "../../styled/Hero/HeroDesc";
import { Home } from "../Home/Home";
import { HeroAnchor } from "../../styled/Hero/HeroAnchor";

export const Hero = () => {
  return (
    <>
      <StyledHeader>
        <HeroTitleSection>
          <Slide>
            <HeroTitleContainer>
              <Slide cascade>
                <HeroTitle>Hi, I am</HeroTitle>
                <HeroTitle>Per</HeroTitle>
                <HeroDescTitle>Front-End Developer</HeroDescTitle>
                <HeroDescTitle>Student</HeroDescTitle>
              </Slide>
            </HeroTitleContainer>
          </Slide>
        </HeroTitleSection>
        <HeroDescSection>
          <Fade cascade>
            <HeroDescContainer>
              <HeroDesc>Short and Sweet</HeroDesc>
              <HeroDesc>
                <HeroAnchor href="#shortme">About me</HeroAnchor>
              </HeroDesc>
              <HeroDesc>
                <HeroAnchor href="#shortprojects">About my projects</HeroAnchor>
              </HeroDesc>
            </HeroDescContainer>
          </Fade>
        </HeroDescSection>
      </StyledHeader>
      <BottomNavigation></BottomNavigation>
      <Home></Home>
    </>
  );
};
