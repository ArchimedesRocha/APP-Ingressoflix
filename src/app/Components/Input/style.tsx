import styled from "styled-components";

interface Props {
  extra?: string
  large?: string
  medium?: string
  small?: string
  disable?: string
}

const InputStyled = styled.div<Props>`
.input {        
  width: ${(props) => {
    if (props.extra) return '78rem'
    if (props.large) return '58rem'
    if (props.medium) return '30rem'
    if (props.small) return '24rem'
    return '100%'
  }};

  padding: 1.6rem 3.2rem;

  border-radius: 5rem;
  border: 0.1rem solid #FFF;
  
  transition: all 0.3s;

  position: relative;

  .title {
    width: 100%;
    position:relative;
    label{
      position: absolute;
      top:0;
      
      font-size: 1.8rem;
      color: #fff;

      transition: all 0.3s;
    }
    input {
      width: 100%;
      background-color: transparent;
      
      font-size: 1.8rem;
      color: #fff;          

      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;

      transition: all 0.3s;
    }
  }

  &.disable{
  border: 0.1rem solid #4B465C;
    .title {
      label {
      color: #4B465C;       
      }
    }
  }

  &.focused {
    border: 0.1rem solid #3CB6FF;
    position:relative;
    .title {
      position: initial;
      label {
        top:-3rem;   
        color: #3CB6FF;       
      }
    }
  }

  &.contain {
    border: 0.1rem solid #3CB6FF;
    position:relative;
    .title {
      position: initial;
      label {
        top:-3rem;
        background: transparent; 
        color: #3CB6FF;       
      }
      input {
        color: #3CB6FF;
      }
    }
    svg {
      stroke: #3CB6FF;
      background-color: transparent;
      border: 0.1rem solid #3CB6FF;
      right: .8rem;
      &:hover {            
      stroke: #fff;
      background-color: #3CB6FF;
      }
    }
  }
}
`

export default InputStyled