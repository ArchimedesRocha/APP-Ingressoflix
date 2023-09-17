import styled from "styled-components";

const ButtonPrimaryStyled = styled.button`
  width:24rem;
  background-color: #020916;
  color: #fff;
  padding: 1.6rem;
  border: 0.1rem solid #fff;
  border-radius: 5rem;
  cursor: pointer;
  font-size: 1.8rem;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3CB6FF;
  }

  &.dark-mode {
    background-color: #fff;
    border: 0.1rem solid #020916;
    color: #020916;
    padding: 1.6rem;
    border-radius: 5rem;
    cursor: pointer;
    font-size: 1.8rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #3CB6FF;
      color: #fff;
      border: 0.1rem solid #fff;
    }
  }
`

export default ButtonPrimaryStyled;
