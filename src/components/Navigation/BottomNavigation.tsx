import { StyledNavBar } from "../styled/NavbarBottom/StyledNavBar";
import { StyledNavContainer } from "../styled/NavbarBottom/StyledNavContainer";
import { StyledNavItem } from "../styled/NavbarBottom/StyledNavItem";
import { StyledNavLink } from "../styled/NavbarBottom/StyledNavLink";
import { StyledNavLogo } from "../styled/NavbarBottom/StyledNavLogo";
import projects from "../../assets/images/logobw/projects.png";
import home from "../../assets//images/logobw/home.png";
import contact2 from "../../assets/images/logobw/contact2.png";
import about from "../../assets/images/logobw/about.png";
import { StyledNavItemText } from "../styled/NavbarBottom/StyledNavItemText";
export const BottomNavigation = () => {
  return (
    <>
      <StyledNavContainer>
        <StyledNavBar>
          <StyledNavItem>
            <StyledNavLink href="#home">
              <StyledNavLogo src={home}></StyledNavLogo>
              <StyledNavItemText>Home</StyledNavItemText>
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink href="#projects">
              <StyledNavLogo src={projects}></StyledNavLogo>
              <StyledNavItemText>Projects</StyledNavItemText>
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink href="#about">
              <StyledNavLogo src={about}></StyledNavLogo>
              <StyledNavItemText>About</StyledNavItemText>
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink href="#contact">
              <StyledNavLogo src={contact2}></StyledNavLogo>
              <StyledNavItemText>Contact</StyledNavItemText>
            </StyledNavLink>
          </StyledNavItem>
        </StyledNavBar>
      </StyledNavContainer>
    </>
  );
};
