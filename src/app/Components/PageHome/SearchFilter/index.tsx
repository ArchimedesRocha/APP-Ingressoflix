// Components
import ButtonSearch from './ButtonSearch/index'
import SelectCategory from './SelectCategory/index';

// Style
import SearchFilterStyled from './style';

const SearchFilter = () => {

  return (
    <SearchFilterStyled>
      <div className="container">
        <ButtonSearch />
        <SelectCategory />
      </div>
    </SearchFilterStyled>
  )
}

export default SearchFilter;