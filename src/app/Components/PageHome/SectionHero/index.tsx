'use client'

import ButtonPrimary from '../../Buttons/index';
import SectionHeroStyled from './style';

const SectionHero = () => {

  return (
    <SectionHeroStyled>
      <div className="container">
        <h1>O caminho para os melhores eventos começa aqui!</h1>
        <ButtonPrimary />
      </div>
    </SectionHeroStyled>
  )
}

export default SectionHero;
