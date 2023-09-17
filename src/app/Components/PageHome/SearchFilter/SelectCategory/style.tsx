import styled from "styled-components";

const SelectCategoryStyled = styled.div`

.select-category__control{
  width: 30rem;
  padding: 1.25rem 3.2rem;

  border-radius: 5rem;
  border: 1px solid #FFF;

  background-color: transparent;
  color: #FFF;

  cursor: pointer;
  
  font-size:1.8rem;

.select-category__value-container{
  .select-category__single-value{
    color: #fff;  
    font-size:1.8rem;
  }
}

.select-category__indicators{
  .select-category__indicator-separator{
    background-color: #fff;
  }
  .select-category__dropdown-indicator{
    svg{
      fill:#fff;
      stroke:#fff;
    }
  }
}

.select-category__placeholder {    
  color: #FFF;
}
}

.selected {  
  width: 30rem;
  padding: 1.25rem 3.2rem;

  border-radius: 5rem;
  border: 1px solid #3CB6FF;

  background-color: transparent;
  color: #3CB6FF;

  font-size:1.8rem;

  .select-category__value-container{
    .select-category__single-value{
      color: #3CB6FF;
      font-size:1.8rem;
    }
  }
  
  .select-category__indicators{
    .select-category__indicator-separator{
      background-color: #3CB6FF;
    }
    .select-category__dropdown-indicator{
      svg{
        fill:#3CB6FF;
        stroke:#3CB6FF;
      }
    }
  }

  .select-category__placeholder {    
    color: #3CB6FF;
  }
}

.select-category{
  position:relative;
  &__menu{
  border: 0.1rem solid rgba(60, 183, 255, 0.2);
  border-radius: .8rem;

  background-color: #020916;
  color: #3CB6FF;
  
  cursor: pointer;

  font-size:1.8rem;

  position: absolute;
  z-index: 2;

  &-list::-webkit-scrollbar {
    width: 0.4rem;
    height: 0px;
  }
  &-list::-webkit-scrollbar-track {
    background: #020916;
  }
  &-list::-webkit-scrollbar-thumb {
    background: #3CB6FF;
    border-radius: 0 8rem 8rem 0;
  }
  &-list::-webkit-scrollbar-thumb:hover {
    background: #3CB6FF;
  }
}

&__option {
    background-color: transparent;
    cursor: pointer;
    
    font-size:1.8rem;

    &--is-focused {
      background-color: rgba(60, 183, 255, 0.2);
    }
    &--is-selected {
      background-color: rgba(60, 183, 255, 0.2);
      color: #3CB6FF;
    }
  }
}
`
export default SelectCategoryStyled;