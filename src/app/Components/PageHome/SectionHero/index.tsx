// Components
import ButtonPrimary from '../../ButtonPrimary';

// Styles
import SectionHeroStyled from './style';

const SectionHero = () => {

  return (
    <SectionHeroStyled>
      <div className="container">
        <h1>O caminho para os melhores eventos começa aqui!</h1>
        <ButtonPrimary text="Criar evento" route="/create-event" />
      </div>
    </SectionHeroStyled>
  )
}

export default SectionHero;
