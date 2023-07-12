import { StyledNavBar } from "../styled/NavbarBottom/StyledNavBar";
import { StyledNavContainer } from "../styled/NavbarBottom/StyledNavContainer";
import { StyledNavItem } from "../styled/NavbarBottom/StyledNavItem";
import { StyledNavLink } from "../styled/NavbarBottom/StyledNavLink";
import { StyledNavLogo } from "../styled/NavbarBottom/StyledNavLogo";
import projects from "../../assets/images/logobw/projects.png";
import home from "../../assets/images/logobw/home.png";
import contact from "../../assets/images/logobw/contact.png";
import about from "../../assets/images/logobw/about.png";
export const BottomNavigation = () => {
  return (
    <>
      <StyledNavContainer>
        <StyledNavBar>
          <StyledNavItem>
            <StyledNavLink href="#home">
              <StyledNavLogo src={home}></StyledNavLogo>Home
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink href="#projects">
              <StyledNavLogo src={projects}></StyledNavLogo>
              Projects
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink href="#about">
              <StyledNavLogo src={about}></StyledNavLogo>
              About
            </StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLink href="#contact">
              <StyledNavLogo src={contact}></StyledNavLogo>
              Contact
            </StyledNavLink>
          </StyledNavItem>
        </StyledNavBar>
      </StyledNavContainer>
    </>
  );
};
