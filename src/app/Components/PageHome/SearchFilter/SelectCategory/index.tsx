// Imports
import { useState } from "react";
import Select, { ActionMeta } from 'react-select';

// Style
import SelectCategoryStyled from "./style"

// Interfaces
interface Option {
  value: string;
  label: string;
}

const SelectCategory = () => {

  const [selectedOptionCategory, setSelectedOptionCategory] = useState<Option | null>(
    { value: 'select', label: 'Selecionar por categoria' }
  );

  const options: Option[] = [
    { value: 'congressos-e-seminarios', label: 'Congressos e Seminários' },
    { value: 'shows-e-entretenimentos', label: 'Shows e Entretenimento' },
    { value: 'religiao-e-espiritualidade', label: 'Religião e Espiritualidade' },
    { value: 'feiras-e-exposicoes', label: 'Feiras e Exposições' },
    { value: 'cursos-e-workshops', label: 'Cursos e Workshops' },
    { value: 'encontros-e-networking', label: 'Encontros e Networking' },
    { value: 'esporte-e-lazer', label: 'Esporte e Lazer' },
    { value: 'outros', label: 'Outros' }
  ]

  const handleSelectChangeCategory = (
    newValue: Option | null,
    actionMeta: ActionMeta<Option>
  ) => {
    setSelectedOptionCategory(newValue);
  }

  return (
    <SelectCategoryStyled>
      <Select
        key="select-component"
        value={selectedOptionCategory}
        onChange={handleSelectChangeCategory}
        options={options}
        classNamePrefix="select-category"
        classNames={{
          control: (state) =>
            `${state.isFocused ? 'selected' : 'unselected'} ${selectedOptionCategory?.value !== 'select' ? 'selected' : ''}`,
        }}
      />
    </SelectCategoryStyled>
  )
}

export default SelectCategory;
