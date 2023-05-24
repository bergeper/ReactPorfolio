import { About } from '../About/About';
import { Contact } from '../Contact/Contact';
import { Header } from '../styled/Header';
import { Navigation } from '../Navigation/Navigation';
import { Projects } from '../Projects/Projects';
import { Footer } from '../styled/Footer';
import { BottomNav } from '../styled/BottomNav';
import { StyledSection } from '../styled/StyledSection';
import { MainContainer } from '../styled/MainContainer';
import { Hero } from '../Hero/Hero';

export const Layout = () => {
  return (
    <>
      <Header id='hero'>
        <Navigation></Navigation>
        <Hero></Hero>
      </Header>
      <BottomNav></BottomNav>
      <MainContainer>
        <StyledSection id='projects'>
          <Projects></Projects>
        </StyledSection>
        <StyledSection id='about'>
          <About></About>
        </StyledSection>
        <StyledSection id='contact'>
          <Contact></Contact>
        </StyledSection>
      </MainContainer>
      <Footer>Footer</Footer>
    </>
  );
};
