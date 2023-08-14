import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { StyledHeader } from "../styled/StyledHeader";
import { Navigation } from "../Navigation/Navigation";
import { Projects } from "../Projects/Projects";
import { StyledFooter } from "../styled/StyledFooter";
import { StyledSection } from "../styled/StyledSection";
import { StyledMain } from "../styled/StyledMain";
import { Hero } from "../Hero/Hero";
import { BottomNavigation } from "../Navigation/BottomNavigation";
import {
  StyledDividerBottomRight,
  StyledDividerBottomleft,
  StyledDividerTopLeft,
  StyledDividerTopRight,
} from "../styled/Figures/StyledSectionDivider";

export const Layout = () => {
  return (
    <>
      <StyledHeader id="hero">
        <Navigation></Navigation>
        <Hero></Hero>
        <StyledDividerTopRight></StyledDividerTopRight>
      </StyledHeader>
      <BottomNavigation></BottomNavigation>
      <StyledMain>
        <StyledSection id="projects">
          <StyledDividerBottomRight></StyledDividerBottomRight>
          <Projects></Projects>
          <StyledDividerTopLeft></StyledDividerTopLeft>
        </StyledSection>
        <StyledSection id="about">
          <StyledDividerBottomleft></StyledDividerBottomleft>
          <About></About>
          <StyledDividerTopRight></StyledDividerTopRight>
        </StyledSection>
        <StyledSection id="contact">
          <StyledDividerBottomRight></StyledDividerBottomRight>
          <Contact></Contact>
          <StyledDividerTopLeft></StyledDividerTopLeft>
        </StyledSection>
      </StyledMain>
      <StyledFooter>Footer</StyledFooter>
    </>
  );
};
