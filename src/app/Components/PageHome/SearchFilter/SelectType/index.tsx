// Imports
import { useState } from "react";
import Select, { ActionMeta } from 'react-select';

// Style
import SelectTypeStyled from "./style"

// Interfaces
interface Option {
  value: string;
  label: string;
}

const SelectType = () => {

  const [selectedOptionType, setSelectedOptionType] = useState<Option | null>(
    { value: 'select', label: 'Selecionar por tipo' }
  );

  const options: Option[] = [
    { value: 'presencial', label: 'Presencial' },
    { value: 'online', label: 'Online' }
  ]

  const handleSelectChangeType = (
    newValue: Option | null,
    actionMeta: ActionMeta<Option>
  ) => {
    setSelectedOptionType(newValue);
  }

  return (
    <SelectTypeStyled>
      <Select
        key="select-component-type"
        value={selectedOptionType}
        onChange={handleSelectChangeType}
        options={options}
        classNamePrefix="select-type"
        classNames={{
          control: (state) =>
            `${state.isFocused ? 'selected' : 'unselected'} ${selectedOptionType?.value !== 'select' ? 'selected' : ''}`,
        }}
      />
    </SelectTypeStyled>
  )
}

export default SelectType;
