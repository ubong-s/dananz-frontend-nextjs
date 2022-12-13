import { useState } from 'react';
import styled from 'styled-components';
import { routes } from '../../lib/routes/routes';
import { breakpoints, misc } from '../../styles';
import { Container } from '../_common';
import { Logo } from '../_common/Logo';
import { NavLink } from './NavLink';
import { NavToggle } from './NavToggle';

const NavRoot = styled.header`
  position: relative;

  padding: 20px 0;
  background-color: ${(props) => props.theme.colors.grayScale.white};

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 42px 0;
  }
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.nav`
  position: absolute;
  left: 0;
  top: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.grayScale.white};
  gap: 2rem;
  padding: 20px 5%;
  width: 100%;
  z-index: 999;
  opacity: 0;
  transform: translateY(-100vh);
  transition: ${misc.transition};

  &.active {
    opacity: 1;
    transform: translateY(0);
    transition: ${misc.transition.ease};
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    display: flex;
    gap: 4.25rem;
    left: unset;
    top: unset;
    position: relative;
    flex-direction: row;
    align-items: center;
    width: auto;
    padding: 0;
    opacity: unset;
    transform: unset;
  }
`;

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
