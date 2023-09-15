import styled from "styled-components";

const ButtonPrimary = styled.button`
  width:240px;
  background-color: #020916;
  color: #fff;
  padding: 20px;
  border: 1px solid #fff;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0050d2;
  }

  &.dark-mode {
    background-color: #fff;
    border: 1px solid #020916;
    color: #020916;
    padding: 20px;
    border-radius: 50px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0050d2;
      color: #fff;
      border: 1px solid #fff;
    }
  }
`

export default ButtonPrimary;
