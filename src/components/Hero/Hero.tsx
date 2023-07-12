import { Slide } from "react-awesome-reveal";
import { HeroDesc } from "../styled/Hero/HeroDesc";
import { HeroTitle } from "../styled/Hero/HeroTitle";
import { HeroTitleSection } from "../styled/Hero/HeroTitleSection";
export const Hero = () => {
  return (
    <>
      <HeroTitleSection>
        <Slide cascade>
          <HeroTitle>Hi, I am</HeroTitle>
          <HeroTitle>Per</HeroTitle>
          <HeroDesc>Soon To Be Front-End Developer</HeroDesc>
        </Slide>
      </HeroTitleSection>
    </>
  );
};
