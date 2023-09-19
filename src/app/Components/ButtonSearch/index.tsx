// Imports
import { useState } from 'react';

// Styles
import ButtonSearchStyled from './style';

interface Props {
  text: string
}
const ButtonSearch = ({ text }: Props) => {

  const [search, setSearch] = useState('')
  const [isInputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  return (
    <ButtonSearchStyled large>
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
            <circle cx="10" cy="10" r="7" />
            <circle cx="10" cy="10" r="7" />
            <path d="M21 21L15 15" />
            <path d="M21 21L15 15" />
          </svg>
        </button>
      </div>
    </ButtonSearchStyled>
  )
}

export default ButtonSearch;