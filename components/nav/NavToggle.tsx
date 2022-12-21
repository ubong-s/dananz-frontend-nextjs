import { HiOutlineBars3BottomRight, HiOutlineXMark } from 'react-icons/hi2';
import styled from 'styled-components';
import { mediaQueries } from '../../styles';

interface NavToggleProps {
  navOpen: boolean;
  toggleNav: () => void;
}

const NavToggleRoot = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2rem;

  ${mediaQueries.desktop} {
    display: none;
  }
`;

export const NavToggle: React.FC<NavToggleProps> = ({ navOpen, toggleNav }) => {
  return (
    <NavToggleRoot onClick={toggleNav}>
      {navOpen ? <HiOutlineXMark /> : <HiOutlineBars3BottomRight />}
    </NavToggleRoot>
  );
};
