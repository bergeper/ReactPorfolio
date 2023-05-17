import './Navigation.scss';

export const Navigation = () => {
  return (
    <nav className='navbar'>
      <h3 className='navbar__title'>P.Berge</h3>
      <ul className='navbar__menu'>
        <li className='navbar__menu--item'>
          <a className='navbar__menu--link' href='#projects'>
            Projects
          </a>
        </li>
        <li className='navbar__menu--item'>
          <a className='navbar__menu--link' href='#projects'>
            About
          </a>
        </li>
        <li className='navbar__menu--item'>
          <a className='navbar__menu--link' href='#projects'>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
