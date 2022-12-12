import Link from 'next/link';

export const Logo = () => (
  <Link href='/' passHref>
    <img src='/assets/logo.svg' alt='Dananz' />
  </Link>
);
