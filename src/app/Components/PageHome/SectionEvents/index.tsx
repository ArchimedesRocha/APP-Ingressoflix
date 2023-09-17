// Component
import CardEvent from "./CardEvent";

// Styled
import SectionEventsStyled from './style'

const SectionEvents = () => {
  return (
    <SectionEventsStyled>
      <div className="container">
        <div className="cards">
          <CardEvent />
        </div>
      </div>
    </SectionEventsStyled>
  )
}
export default SectionEvents;