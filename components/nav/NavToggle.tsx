import { HiOutlineBars3BottomRight, HiOutlineXMark } from 'react-icons/hi2';
import { NavToggleRoot } from '../../styles/components/nav';

export const NavToggle: React.FC<{
  navOpen: boolean;
  toggleNav: () => void;
}> = ({ navOpen, toggleNav }) => {
  return (
    <NavToggleRoot onClick={toggleNav}>
      {navOpen ? <HiOutlineXMark /> : <HiOutlineBars3BottomRight />}
    </NavToggleRoot>
  );
};
