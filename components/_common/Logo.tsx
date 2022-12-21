import Link from 'next/link';

export const Logo: React.FC = () => (
  <Link href='/' passHref>
    <img src='/assets/logo.svg' alt='Dananz' />
  </Link>
);
