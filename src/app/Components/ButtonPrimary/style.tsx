import styled from "styled-components";

interface Props {
  extraLarge?: boolean,
  large?: boolean,
  medium?: boolean,
  small?: boolean
}

const ButtonPrimaryStyled = styled.button<Props>`
  width: ${(props) => {
    if (props.extraLarge) return '78rem';
    if (props.large) return '58rem';
    if (props.medium) return '30rem';
    if (props.small) return '24rem';
    return '100%';
  }};
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
