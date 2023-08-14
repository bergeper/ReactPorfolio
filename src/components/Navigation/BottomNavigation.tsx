import { StyledNavBar } from "../styled/NavbarBottom/StyledNavBar";
import { StyledNavContainer } from "../styled/NavbarBottom/StyledNavContainer";
import { StyledNavItem } from "../styled/NavbarBottom/StyledNavItem";
import { StyledNavLogo } from "../styled/NavbarBottom/StyledNavLogo";
import projects from "../../assets/images/logobw/projects.png";
import contact2 from "../../assets/images/logobw/contact2.png";
import about from "../../assets/images/logobw/about.png";
import { StyledNavItemText } from "../styled/NavbarBottom/StyledNavItemText";
import { Link } from "react-router-dom";
import "./BottomNavigation.scss";
export const BottomNavigation = () => {
  return (
    <>
      <StyledNavContainer>
        <StyledNavBar>
          <StyledNavItem>
            <Link to="/projects" className="StyledNavLink">
              <StyledNavLogo src={projects}></StyledNavLogo>
              <StyledNavItemText>Projects</StyledNavItemText>
            </Link>
          </StyledNavItem>
          <StyledNavItem>
            <Link to="/about" className="StyledNavLink">
              <StyledNavLogo src={about}></StyledNavLogo>
              <StyledNavItemText>About</StyledNavItemText>
            </Link>
          </StyledNavItem>
          <StyledNavItem>
            <Link to="/contact" className="StyledNavLink">
              <StyledNavLogo src={contact2}></StyledNavLogo>
              <StyledNavItemText>Contact</StyledNavItemText>
            </Link>
          </StyledNavItem>
        </StyledNavBar>
      </StyledNavContainer>
    </>
  );
};
