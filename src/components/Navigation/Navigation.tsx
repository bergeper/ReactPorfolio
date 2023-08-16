import { useState } from "react";
import { MenuButton } from "../styled/Menu/MenuButton";
import { Menu } from "../styled/Menu/Menu";
import { MenuList } from "../styled/Menu/MenuList";
import { MenuItem } from "../styled/Menu/MenuItem";
import { MenuIcon } from "../styled/Menu/MenuIcon";
import projects from "../../assets/images/logobw/projects.png";
import home from "../../assets//images/logobw/home.png";
import contact from "../../assets/images/logobw/contact.png";
import about from "../../assets/images/logobw/about.png";
import { Slide } from "react-awesome-reveal";
import { MenuItemText } from "../styled/Menu/MenuItemText";
import { Link } from "react-router-dom";
import "./Navigation.scss";

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
  /*
const handleClick = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
*/

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
                <Link to="/" onClick={showMenu} className="MenuLink">
                  <MenuItemText>Home</MenuItemText>
                  <MenuIcon src={home}></MenuIcon>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/projects" onClick={showMenu} className="MenuLink">
                  <MenuItemText>Projects</MenuItemText>
                  <MenuIcon src={projects}></MenuIcon>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/about" onClick={showMenu} className="MenuLink">
                  <MenuItemText>About</MenuItemText>
                  <MenuIcon src={about}></MenuIcon>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/contact" onClick={showMenu} className="MenuLink">
                  <MenuItemText>Contact</MenuItemText>
                  <MenuIcon src={contact}></MenuIcon>
                </Link>
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
