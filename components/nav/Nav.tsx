import styled from 'styled-components';
import { routes } from '../../lib/routes/routes';
import { NavLink } from './NavLink';

const NavRoot = styled.nav``;

export const Nav: React.FC = () => {
  const links = [
    { display: 'Home', route: routes.home },
    { display: 'About Us', route: routes.aboutUs },
    { display: 'Services', route: routes.services },
    { display: 'Our Teams', route: routes.ourTeams },
    { display: 'Contact Us', route: routes.contactUs },
  ];

  return (
    <NavRoot>
      {links.map((link) => (
        <NavLink key={link.display} href={`/${link.route}`}>
          {link.display}
        </NavLink>
      ))}
    </NavRoot>
  );
};
