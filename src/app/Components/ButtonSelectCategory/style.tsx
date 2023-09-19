import styled from "styled-components";

interface Props {
  extraLarge?: boolean
  large?: boolean
  medium?: boolean
  small?: boolean
  disable?: boolean
}

const SelectCategoryStyled = styled.div<Props>`

.select-category__control{
  width: ${(props) => {
    if (props.extraLarge) return '78rem';
    if (props.large) return '58rem';
    if (props.medium) return '30rem';
    if (props.small) return '24rem';
    return '100%';
  }};
  
  padding: 1.25rem 3.2rem;

  border-radius: 5rem;
  border: 1px solid ${(props) => props.disable ? '#4B465C' : '#FFF'};

  background-color: transparent;
  color: #FFF;

  cursor: pointer;
  
  font-size:1.8rem;

  .select-category__value-container{
    .select-category__single-value{
      color: ${(props) => props.disable ? '#4B465C' : '#FFF'};  
      font-size:1.8rem;
    }
  }

  .select-category__indicators{
    .select-category__indicator-separator{
      background-color: ${(props) => props.disable ? '#4B465C' : '#FFF'};
    }
    .select-category__dropdown-indicator{
      svg{
        fill:${(props) => props.disable ? '#4B465C' : '#FFF'};
        stroke:${(props) => props.disable ? '#4B465C' : '#FFF'};
        transition: all .3s;
      }
    }
  }

  .select-category__placeholder {    
    color: #FFF;
  }
}

.select-category__control--menu-is-open {
  .select-category__indicators{
    .select-category__dropdown-indicator{
      svg{
        rotate: -180deg;
      }
    }
  }
}

.selected {
  border: 1px solid #3CB6FF;

  color: #3CB6FF;

  .select-category__value-container{
    .select-category__single-value{
      color: #3CB6FF;
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