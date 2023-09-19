// Components
import ButtonSearch from '../../../Components/ButtonSearch'
import ButtonSelectCategory from '../../ButtonSelectCategory';
import ButtonSelectType from '../../ButtonSelectType';

// Style
import SearchFilterStyled from './style';

const SearchFilter = () => {

  return (
    <SearchFilterStyled>
      <div className="container">
        <ButtonSearch text="Buscar evento" />
        <ButtonSelectType textType="Selecionar por tipo" />
        <ButtonSelectCategory textCategory="Selecionar por categoria" />
      </div>
    </SearchFilterStyled>
  )
}

export default SearchFilter;