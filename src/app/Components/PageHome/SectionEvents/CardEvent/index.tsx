// Component
import CategoryEvent from './CategoryEvent';

// Styled
import CardEventStyled from './style'

const CardEvent = () => {
  return (
    <CardEventStyled>
      <div className="card">
        <CategoryEvent />
        <CategoryEvent />
      </div>
    </CardEventStyled>
  )
}

export default CardEvent;