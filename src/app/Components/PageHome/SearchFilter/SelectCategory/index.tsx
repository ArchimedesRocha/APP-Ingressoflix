import { useState } from "react";

// Style
import SelectCategoryStyled from "./style"
const SelectCategory = () => {

  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };

  return (
    <SelectCategoryStyled>
      <div className={`${selectedValue ? 'selected' : ''}`}>
        <h2>Escolha uma categoria:</h2>
        <select
          value={selectedValue}
          onChange={handleSelectChange}
        >
          <option value="">Selecione uma opção</option>
          <option value="opcao1">Opção 1</option>
          <option value="opcao2">Opção 2</option>

        </select>
        {selectedValue && (
          <p>Você selecionou: {selectedValue}</p>
        )}
      </div>
    </SelectCategoryStyled>
  )
}

export default SelectCategory