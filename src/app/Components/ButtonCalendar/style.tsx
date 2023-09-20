import styled from "styled-components";

interface Props {
  extra?: string;
  large?: string;
  medium?: string;
  small?: string;
}

const ButtonCalendarStyled = styled.div<Props>`
    .input-search{
      display: flex;
      align-items:center;
      gap: 1.6rem;

      width: ${(props) => {
    if (props.extra) return '78rem';
    if (props.large) return '58rem';
    if (props.medium) return '30rem';
    if (props.small) return '24rem';
    return '100%';
  }};

      padding: 1.6rem 3.2rem;

      border-radius: 5rem;
      border: 0.1rem solid #4B465C;
      
      transition: all 0.3s;

      position: relative;

      .input{
        width: 100%;
        position:relative;
        label{
          position: absolute;
          top:0;
          
          font-size: 1.8rem;
          color: #4B465C;

          transition: all 0.3s;
        }
        input {
          width: 100%;
          background-color: transparent;
          
          font-size: 1.8rem;
          color: #4B465C;          

          box-shadow: 0 0 0 0;
          border: 0 none;
          outline: 0;

          transition: all 0.3s;
        }
      }

      button {
        pointer-events:none;
        svg {
          width: 4.4rem;
          height: 4.4rem;
          stroke: #4B465C;
          transition: all 0.3s;
          background-color: transparent;
          border-radius: 50%;
          padding: .8rem;
          position: absolute;
          right: 3.2rem;
          top: .7rem;
        }
      }

      &.focused {
        position:relative;
        border: 0.1rem solid #3CB6FF;
        .input {
          position: initial;
          label {
            color: #3CB6FF;
            top:-3rem;      
          }
        }
        button {
          svg {
            stroke: #3CB6FF;
          }
        }
      }
      &.contain {
        border: 0.1rem solid #3CB6FF;
        position:relative;
        .input {
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
        button {          
          svg {
            stroke: #3CB6FF;
            background-color: transparent;
            right: .8rem;
          }
        }
      }
    }
  
`

export default ButtonCalendarStyled;