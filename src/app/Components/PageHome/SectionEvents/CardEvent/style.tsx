import styled from "styled-components";

const CardEventStyled = styled.div`
  .card{
    display: flex;
    flex-direction: column;
    gap: 6.4rem;
    .category-title{
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2{
        color: #FFF;
        font-size: 3.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
`

export default CardEventStyled