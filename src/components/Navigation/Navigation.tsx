import { useState } from 'react';
import { MenuButton } from '../styled/Menu/MenuButton';
import { Menu } from '../styled/Menu/Menu';
import { MenuList } from '../styled/Menu/MenuList';
import { MenuItem } from '../styled/Menu/MenuItem';
import { MenuLink } from '../styled/Menu/MenuLink';
import { MenuIcon } from '../styled/Menu/MenuIcon';
import projects from '../../assets/images/logo/projects4.png';
import home from '../../assets//images/logo/home2.png';
import contact from '../../assets/images/logo/contact.png';
import about from '../../assets/images/logo/about.png';

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
        {menuOpen ? 'Close Menu' : 'Menu'}
      </MenuButton>
      <Menu>
        {toggleMenu ? (
          <MenuList>
            <MenuItem>
              <MenuLink href='#hero' onClick={showMenu}>
                <MenuIcon src={home}></MenuIcon>
                Home
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href='#projects' onClick={showMenu}>
                <MenuIcon src={projects}></MenuIcon>
                Projects
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href='#about' onClick={showMenu}>
                <MenuIcon src={about}></MenuIcon>
                About
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href='#contact' onClick={showMenu}>
                <MenuIcon src={contact}></MenuIcon>
                Contact
              </MenuLink>
            </MenuItem>
          </MenuList>
        ) : (
          ' '
        )}
      </Menu>
    </>
  );
};
