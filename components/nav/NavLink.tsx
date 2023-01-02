import Link from 'next/link';
import { Button } from '../_common';

export const NavLink: React.FC<{
  href: string;
  children: React.ReactElement | string;
  variant: 'nav' | 'button' | 'button-alt';
  closeNav: () => void;
}> = ({ href, children, variant, closeNav }) => (
  <Link href={href} passHref onClick={closeNav}>
    <Button variant={variant}>{children}</Button>
  </Link>
);
