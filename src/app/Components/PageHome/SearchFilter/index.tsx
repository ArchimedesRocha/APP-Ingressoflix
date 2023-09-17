// Components
import ButtonSearch from './ButtonSearch'
import SelectCategory from './SelectCategory';
import SelectType from './SelectType';

// Style
import SearchFilterStyled from './style';

const SearchFilter = () => {

  return (
    <SearchFilterStyled>
      <div className="container">
        <ButtonSearch />
        <SelectType />
        <SelectCategory />
      </div>
    </SearchFilterStyled>
  )
}

export default SearchFilter;