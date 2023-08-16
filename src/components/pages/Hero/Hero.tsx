import { Slide } from "react-awesome-reveal";
import { HeroTitleContainer } from "../../styled/Hero/HeroTitleContainer";
import { HeroDescTitle, HeroTitle } from "../../styled/Hero/HeroTitle";
import { HeroTitleSection } from "../../styled/Hero/HeroTitleSection";
import { BottomNavigation } from "../../navigation/BottomNavigation";
import { StyledHeader } from "../../styled/StyledHeader";
import { HeroDescSection } from "../../styled/Hero/HeroDescSection";
import { HeroDescContainer } from "../../styled/Hero/HeroDescContainer";
import { HeroDesc } from "../../styled/Hero/HeroDesc";
import { Home } from "../Home/Home";
import { Link } from "react-router-dom";

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
          <HeroDescContainer>
            <HeroDesc>Who am I?</HeroDesc>
            <HeroDesc>Check out my projects</HeroDesc>
            <HeroDesc>Get in contact with me</HeroDesc>
            <HeroDesc>
              Check out
              <Link to="#test"> Below!</Link>
            </HeroDesc>
          </HeroDescContainer>
        </HeroDescSection>
      </StyledHeader>
      <BottomNavigation></BottomNavigation>
      <Home></Home>
    </>
  );
};
