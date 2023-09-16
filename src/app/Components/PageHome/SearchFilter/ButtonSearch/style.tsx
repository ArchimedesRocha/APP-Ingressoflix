import styled from "styled-components";

const ButtonSearchStyled = styled.div`
    .input-search{
      display: flex;
      align-items:center;
      gap: 1.6rem;

      width: 58rem;
      padding: 1.6rem 3.2rem;

      border-radius: 5rem;
      border: 0.1rem solid #FFF;
      
      transition: all 0.3s;

      .input{
        width: 100%;
        position:relative;
        label{
          position: absolute;
          top:0;
          
          font-size: 1.6rem;
          color: #fff;

          transition: all 0.3s;
        }
        input {
          width: 100%;
          background-color: transparent;
          
          font-size: 1.6rem;
          color: #fff;          

          box-shadow: 0 0 0 0;
          border: 0 none;
          outline: 0;

          transition: all 0.3s;
        }
      }
      svg {
        width: 2.4rem;
        height: 2.4rem;
        stroke: #fff;
        transition: all 0.3s;
      }

      &.focused {
        position:relative;
        .input {
          position: initial;
          label {
            top:-3rem;      
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
        svg {
          stroke: #3CB6FF;
        }
      }
    }
  
`

export default ButtonSearchStyled;