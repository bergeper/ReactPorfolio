import { Slide } from "react-awesome-reveal";
import { HeroDesc } from "../../styled/Hero/HeroDesc";
import { HeroDescContainer } from "../../styled/Hero/HeroDescContainer";
import { HeroTitle } from "../../styled/Hero/HeroTitle";
import { HeroTitleSection } from "../../styled/Hero/HeroTitleSection";
import { BottomNavigation } from "../../navigation/BottomNavigation";
import { StyledSemiCircle } from "../../styled/Figures/StyledSemiCircle";
import { StyledHeader } from "../../styled/StyledHeader";

export const Home = () => {
  return (
    <>
      <StyledHeader>
        <HeroTitleSection>
          <Slide>
            <HeroDescContainer>
              <Slide cascade>
                <HeroTitle>Hi, I am</HeroTitle>
                <HeroTitle>Per</HeroTitle>
                <HeroDesc>Soon To Be</HeroDesc>
                <HeroDesc>Front-End Developer</HeroDesc>
              </Slide>
            </HeroDescContainer>
          </Slide>
        </HeroTitleSection>
        <StyledSemiCircle></StyledSemiCircle>
      </StyledHeader>
      <BottomNavigation></BottomNavigation>
    </>
  );
};
