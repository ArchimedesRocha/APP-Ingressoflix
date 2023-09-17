'use client'

// Imports
import Link from "next/link";
import Image from 'next/image';


// Styles
import BaseStyled from "./style";

const Base = () => {
  return (
    <BaseStyled>
      <footer>
        <div className="container">
          <div className="links">
            <div className="social-links">
              <h3>Acompanhe nas redes sociais:</h3>
              <div className="icons">
                <Link href="/">
                  <Image
                    width={36}
                    height={36}
                    src="/images/icon/icon-twitter.svg"
                    alt="icone rede social"
                  />
                </Link>
                <Link href="/">
                  <Image
                    width={36}
                    height={36}
                    src="/images/icon/icon-youtube.svg"
                    alt="icone rede social"
                  />
                </Link>
                <Link href="/">
                  <Image
                    width={36}
                    height={36}
                    src="/images/icon/icon-facebook.svg"
                    alt="icone rede social"
                  />
                </Link>
                <Link href="/">
                  <Image
                    width={36}
                    height={36}
                    src="/images/icon/icon-instagram.svg"
                    alt="icone rede social"
                  />
                </Link>
              </div>
            </div>
            <div className="logo-footer">
              <Link href="/">
                <Image
                  width={208}
                  height={63}
                  src="/images/logo/logo-ingressoflix-footer.svg"
                  alt="Logo Ingressoflix"
                />
              </Link>
            </div>
          </div>
          <div className="copyright">
            <p>Ingressoflix todos os direitos reservados</p>
          </div>

        </div>
      </footer>
    </BaseStyled>
  )
}

export default Base