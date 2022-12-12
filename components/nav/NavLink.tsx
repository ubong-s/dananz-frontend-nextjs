import Link from 'next/link';
import { Button } from '../_common/Button';

interface NavLinkProps {
  href: string;
  children: React.ReactElement | string;
  variant: 'nav' | 'button' | 'button-alt';
  closeNav: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  variant,
  closeNav,
}) => (
  <Link href={href} passHref onClick={closeNav}>
    <Button variant={variant}>{children}</Button>
  </Link>
);
