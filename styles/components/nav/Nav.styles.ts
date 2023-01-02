import styled from 'styled-components';
import mediaQueries from '../../mediaQueries';
import misc from '../../misc';

export const NavRoot = styled.header`
  position: relative;

  padding: 1.25rem 0;
  background-color: ${(props) => props.theme.colors.grayScale.white};

  ${mediaQueries.desktop} {
    padding: 2.6rem 0;
  }
`;

export const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinks = styled.nav`
  position: absolute;
  left: 0;
  top: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.grayScale.white};
  gap: 2rem;
  padding: 1.25rem 5%;
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

  ${mediaQueries.desktop} {
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
