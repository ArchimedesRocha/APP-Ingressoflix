import styled from "styled-components";

const CategoryEventStyled = styled.div`
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
  .category-cards {
    border-radius: 0.8rem;
    border: 0.1rem solid rgba(60, 183, 255, 0.2);

    margin-top: 3.2rem;

    overflow: hidden;

    transition: all 0.3s;

    .details {
      margin: 1.2rem .8rem .8rem .8rem;
      .excerpt {
        h3 {
          font-family: 'Mohave', sans-serif;
          color: #FFF;
          font-size: 1.8rem;
          font-weight: 300;
        }
      }
      .location{
        display: flex;
        justify-content: space-between;
        .location-specific{
          .neighborhood {
            display: flex;
            align-items: center;
            justify-content:flex-start;
            gap: .8rem;
            margin: .8rem 0;
            p {
              color: #FFF;
              font-family: 'Mohave', sans-serif;
              font-size: 1.6rem;
              font-weight: 300;
            }
          }
          .date {
            width: 17rem;
            display: flex;
            align-items:center;
            gap: .4rem;
            .day, .hour, .type{
              p {
                color: #FFF;
                font-family: 'Mohave', sans-serif;
                font-size: 1.6rem;
                font-weight: 300;
              }
              span {                  
                color: #FFF;
                font-family: 'Mohave', sans-serif;
                font-weight: 300;
              }
            }
          }
        }
        .location-emphasis{
          .number{
            p{
              color: #3CB6FF;
              font-family: 'Mohave', sans-serif;
              text-align: center;
              font-size: 3.2rem;
            }
          }
          .month{
            p{
              color: #FFF;
              font-family: 'Mohave', sans-serif;
              text-align: center;
              font-size: 1.8rem;
            }
          }
        }
      }
    }
    &:hover {
      margin-top: 2.8rem;
      border-bottom: 0.1rem solid #3CB6FF;
    }
  }
`
export default CategoryEventStyled;