'use client'

import Link from 'next/link';
import HeaderStyled from './style'
import Image from 'next/image'

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
          />
        </Link>
      </div>
    </HeaderStyled>
  )
};

export default Header;