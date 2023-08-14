import { Slide } from "react-awesome-reveal";
import { HeroDesc } from "../styled/Hero/HeroDesc";
import { HeroTitle } from "../styled/Hero/HeroTitle";
import { HeroTitleSection } from "../styled/Hero/HeroTitleSection";
import { HeroDescContainer } from "../styled/Hero/HeroDescContainer";
export const Hero = () => {
  return (
    <>
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
    </>
  );
};
