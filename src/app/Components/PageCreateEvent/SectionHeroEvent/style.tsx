import styled from "styled-components";

const SectionHeroEventStyled = styled.section`
  
  width: 100vw;
  height: 100vh;

  background-image: url(images/banner/banner-create-event.png);
  background-size:contain;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    width: 121.5rem;
    h1 {
      width: 52.5rem;
      color: #FFF;
      font-size: 4.8rem;
      font-weight: 400;
      margin-bottom: 6.4rem;
    }
    .event-title {
      display: flex;
      flex-direction: column;
      gap: 4.8rem;      

      h2 {
        color: #FFF;
        font-size: 3.6rem;
        font-weight: 400;
      }

      .inputs {
        display: flex;
        align-items:center;
        gap: 1.6rem;        
      }
    }
  }
`

export default SectionHeroEventStyled;