import { useState } from 'react';
import './Navigation.scss';

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
      <button
        onClick={showMenu}
        className={menuOpen ? 'open--menu' : 'closed--menu'}
      >
        {menuOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      <nav className='menu'>
        {toggleMenu ? (
          <ul className='menu__list'>
            <li className='menu__list--item'>
              <a className='menu__list--link' href='#hero'>
                Home
              </a>
            </li>
            <li className='menu__list--item'>
              <a className='menu__list--link' href='#projects'>
                Projects
              </a>
            </li>
            <li className='menu__list--item'>
              <a className='menu__list--link' href='#about'>
                About
              </a>
            </li>
            <li className='menu__list--item'>
              <a className='menu__list--link' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        ) : (
          ' '
        )}
      </nav>
    </>
  );
};
