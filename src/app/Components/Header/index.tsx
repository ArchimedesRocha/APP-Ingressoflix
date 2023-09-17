'use client'

// Imports
import Link from 'next/link';
import Image from 'next/image';

// Styles
import HeaderStyled from './style';

const Header = () => {
  return (
    <HeaderStyled>
      <div className="container">
        <Link href="/">
          <Image
            src="images/logo/logo-ingressoflix-header.svg"
            width={300}
            height={90}
            alt="logo ingressoflix"
            priority={true}
          />
        </Link>
      </div>
    </HeaderStyled>
  )
};

export default Header;