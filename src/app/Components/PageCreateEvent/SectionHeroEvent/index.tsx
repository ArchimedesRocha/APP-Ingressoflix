// Components
import ButtonSelectTypeCreateEvent from '../../ButtonSelectTypeCreateEvent';
import ButtonSelectCategoryCreateEvent from '../../ButtonSelectCategoryCreateEvent';
import Input from "../../Input";
import ButtonSelectModality from "../../ButtonSelectModality";
import ButtonCalendar from "../../ButtonCalendar";

// Context
import { SelectionContextEventType } from '../../../Context/SelectionContextEventType'

// Styles
import SectionHeroEventStyled from "./style";

const SectionHeroEvent = () => {
  return (
    <SelectionContextEventType>
      <SectionHeroEventStyled>
        <div className="container">
          <h1>Preencha os campos</h1>
          <div className="event-title">
            <h2>Informações Gerais</h2>
            <div className="inputs">
              <Input text="Título do evento" />
              <ButtonSelectTypeCreateEvent textType="Tipo do evento" />
              <ButtonSelectCategoryCreateEvent textCategory="Categoria do evento" />
            </div>
            <div className="inputs">
              <Input text="URL do evento" />
              <ButtonCalendar text="Data do evento" />
              <ButtonSelectModality textModality="Modalidade" />
            </div>
          </div>
        </div>
      </SectionHeroEventStyled>
    </SelectionContextEventType>
  )
}

export default SectionHeroEvent;