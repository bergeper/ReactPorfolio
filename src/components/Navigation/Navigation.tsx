import { useState } from "react";
import { MenuButton } from "../styled/Menu/MenuButton";
import { Menu } from "../styled/Menu/Menu";
import { MenuList } from "../styled/Menu/MenuList";
import { MenuItem } from "../styled/Menu/MenuItem";
import { MenuLink } from "../styled/Menu/MenuLink";
import { MenuIcon } from "../styled/Menu/MenuIcon";
import projects from "../../assets/images/logobw/projects.png";
import home from "../../assets//images/logobw/home.png";
import contact from "../../assets/images/logobw/contact.png";
import about from "../../assets/images/logobw/about.png";
import { Slide } from "react-awesome-reveal";
import { MenuItemText } from "../styled/Menu/MenuItemText";

export const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const showMenu = () => {
    if (toggleMenu === true) {
      setMenuOpen(false);
      setToggleMenu(false);
    } else {
      setMenuOpen(true);
      setToggleMenu(true);
    }
  };

  return (
    <>
      <MenuButton onClick={showMenu}>
        {menuOpen ? "Close Menu" : "Menu"}
      </MenuButton>
      <Menu>
        {toggleMenu ? (
          <Slide direction="right">
            <MenuList>
              <MenuItem>
                <MenuLink href="#hero" onClick={showMenu}>
                  <MenuItemText>Home</MenuItemText>
                  <MenuIcon src={home}></MenuIcon>
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="#projects" onClick={showMenu}>
                  <MenuItemText>Projects</MenuItemText>
                  <MenuIcon src={projects}></MenuIcon>
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="#about" onClick={showMenu}>
                  <MenuItemText>About</MenuItemText>
                  <MenuIcon src={about}></MenuIcon>
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="#contact" onClick={showMenu}>
                  <MenuItemText>Contact</MenuItemText>
                  <MenuIcon src={contact}></MenuIcon>
                </MenuLink>
              </MenuItem>
            </MenuList>
          </Slide>
        ) : (
          " "
        )}
      </Menu>
    </>
  );
};
