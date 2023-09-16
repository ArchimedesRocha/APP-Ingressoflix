import { useState } from 'react';
import ButtonSearchStyled from './style';
const ButtonSearch = () => {

  const [search, setSearch] = useState('')
  const [isInputFocused, setInputFocused] = useState(false);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  return (
    <ButtonSearchStyled>
      <div className={`input-search ${isInputFocused ? 'focused' : ''} ${search ? 'contain' : ''}`}>
        <div className="input">
          <label htmlFor="">
            Buscar evento
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
            <circle cx="10" cy="10" r="7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="10" cy="10" r="7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21 21L15 15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21 21L15 15" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </ButtonSearchStyled>
  )
}

export default ButtonSearch;