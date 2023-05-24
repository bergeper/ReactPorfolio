import { useState } from 'react';
import { MenuButton } from '../styled/Menu/MenuButton';
import { Menu } from '../styled/Menu/Menu';
import { MenuList } from '../styled/Menu/MenuList';
import { MenuItem } from '../styled/Menu/MenuItem';
import { MenuLink } from '../styled/Menu/MenuLink';

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
              <MenuLink href='#hero'>Home</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href='#projects'>Projects</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href='#about'>About</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href='#contact'>Contact</MenuLink>
            </MenuItem>
          </MenuList>
        ) : (
          ' '
        )}
      </Menu>
    </>
  );
};
