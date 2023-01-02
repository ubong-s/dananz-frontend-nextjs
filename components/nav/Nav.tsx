import { useState } from 'react';
import { routes } from '../../lib/routes/routes';
import { NavInner, NavLinks, NavRoot } from '../../styles/components/nav';
import { Container, Logo } from '../_common';
import { NavLink, NavToggle } from '.';

export const Nav: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  const closeNav = () => {
    setNavOpen(false);
  };

  const links = [
    { display: 'Home', route: routes.home },
    { display: 'About Us', route: routes.aboutUs },
    { display: 'Services', route: routes.services },
    { display: 'Portfolio', route: routes.portfolio },
    { display: 'Our Teams', route: routes.ourTeams },
    { display: 'Contact Us', route: routes.contactUs },
  ];

  return (
    <NavRoot>
      <Container>
        <NavInner>
          <Logo />
          <NavLinks className={navOpen ? 'active' : ''}>
            {links.map((link) => (
              <NavLink
                key={link.display}
                href={`/${link.route}`}
                variant={link.route === routes.contactUs ? 'button' : 'nav'}
                closeNav={closeNav}
              >
                {link.display}
              </NavLink>
            ))}
          </NavLinks>
          <NavToggle navOpen={navOpen} toggleNav={toggleNav} />
        </NavInner>
      </Container>
    </NavRoot>
  );
};
