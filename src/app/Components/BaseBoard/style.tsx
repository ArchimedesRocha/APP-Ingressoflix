import styled from "styled-components";

const BaseStyled = styled.div`
margin: 8rem 0;

footer {
  width: 100vw;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  .container {
    width: 121.5rem;
    .links{
      display: flex;
      align-items: center;
      justify-content: space-between;
      .social-links {    
        h3{
          color: #FFF;
          font-family: 'Mohave', sans-serif;
          font-size: 2rem;
          font-weight: 300;
        }
        .icons {
          display: flex;
          gap: 1.6rem;
          a {
            margin-top: 1.6rem;
            transition: all 0.3s;
            &:hover {
              margin-top: .8rem;
            }
          }
        }
      }
    }
    .copyright{
      display: flex;
      align-items: center;
      justify-content: center;

      margin-top: 3.2rem;
      p {
        font-family: 'Mohave', sans-serif;
        color: #FFF;
        font-size: 1.6rem;
        font-weight: 300;
      }
    }
  }
}
`

export default BaseStyled;