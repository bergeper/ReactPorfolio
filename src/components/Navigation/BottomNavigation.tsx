import { StyledNavBar } from '../styled/NavbarBottom/StyledNavBar';
import { StyledNavContainer } from '../styled/NavbarBottom/StyledNavContainer';
import { StyledNavItem } from '../styled/NavbarBottom/StyledNavItem';
import { StyledNavLink } from '../styled/NavbarBottom/StyledNavLink';
import { StyledNavLogo } from '../styled/NavbarBottom/StyledNavLogo';

export const BottomNavigation = () => {
  return (
    <>
      <StyledNavContainer>
        <StyledNavBar>
          <StyledNavItem>
            <StyledNavLogo></StyledNavLogo>
            <StyledNavLink href='#home'>Home</StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLogo></StyledNavLogo>
            <StyledNavLink href='#projects'>Projects</StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLogo></StyledNavLogo>
            <StyledNavLink href='#about'>About</StyledNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <StyledNavLogo></StyledNavLogo>
            <StyledNavLink href='#contact'>Contact</StyledNavLink>
          </StyledNavItem>
        </StyledNavBar>
      </StyledNavContainer>
    </>
  );
};
