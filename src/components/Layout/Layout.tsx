import { About } from '../About/About';
import { Contact } from '../Contact/Contact';
import { StyledHeader } from '../styled/StyledHeader';
import { Navigation } from '../Navigation/Navigation';
import { Projects } from '../Projects/Projects';
import { StyledFooter } from '../styled/StyledFooter';
import { StyledSection } from '../styled/StyledSection';
import { StyledMain } from '../styled/StyledMain';
import { Hero } from '../Hero/Hero';
import { BottomNavigation } from '../Navigation/BottomNavigation';

export const Layout = () => {
  return (
    <>
      <StyledHeader id='hero'>
        <Navigation></Navigation>
        <Hero></Hero>
      </StyledHeader>
      <BottomNavigation></BottomNavigation>
      <StyledMain>
        <StyledSection id='projects'>
          <Projects></Projects>
        </StyledSection>
        <StyledSection id='about'>
          <About></About>
        </StyledSection>
        <StyledSection id='contact'>
          <Contact></Contact>
        </StyledSection>
      </StyledMain>
      <StyledFooter>Footer</StyledFooter>
    </>
  );
};
