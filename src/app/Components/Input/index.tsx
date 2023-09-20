// Imports
import { useState } from 'react';

// Styles
import InputStyled from './style'

interface Props {
  text: string;
}

const Input = ({ text }: Props) => {

  const [title, setTitle] = useState('')
  const [titleIsFocused, setTitleIsFocused] = useState(false)

  const handleTitleFocus = () => {
    setTitleIsFocused(true)
  }

  const handleTitleBlur = () => {
    setTitleIsFocused(false);
  }

  return (
    <InputStyled large='large'>
      <div className={`input ${titleIsFocused ? 'focused' : 'disable'} ${title ? 'contain' : ''}`}>
        <div className='title'>
          <label htmlFor="">
            {text}
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onFocus={handleTitleFocus}
            onBlur={handleTitleBlur}
          />
        </div>
      </div>
    </InputStyled>
  )
}

export default Input;