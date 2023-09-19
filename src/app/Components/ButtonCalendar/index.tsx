// Imports
import { useState } from 'react';

// Styles
import ButtonCalendarStyled from './style';

interface Props {
  text: string
}
const ButtonCalendar = ({ text }: Props) => {

  const [search, setSearch] = useState('')
  const [isInputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  return (
    <ButtonCalendarStyled medium>
      <div className={`input-search ${isInputFocused ? 'focused' : ''} ${search ? 'contain' : ''}`}>
        <div className="input">
          <label htmlFor="">
            {text}
          </label>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>
        <button>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="5" width="16" height="16" rx="2" />
            <path d="M16 3V7" />
            <path d="M8 3V7" />
            <path d="M4 11H20" />
            <path d="M10 16H14" />
          </svg>
        </button>
      </div>
    </ButtonCalendarStyled>
  )
}

export default ButtonCalendar;