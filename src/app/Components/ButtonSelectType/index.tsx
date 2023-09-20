// Imports
import { useState } from "react";
import Select from 'react-select';

// Style
import SelectTypeStyled from "./style"

// Interfaces
interface Option {
  value: string;
  label: string;
}

interface Props {
  textType: string;
}

const SelectType = ({ textType }: Props) => {

  const [selectedOptionType, setSelectedOptionType] = useState<Option | null>(
    { value: 'select', label: `${textType}` }
  );

  const options: Option[] = [
    { value: 'presencial', label: 'Presencial' },
    { value: 'online', label: 'Online' }
  ]

  const handleSelectChangeType = (
    newValue: Option | null
  ) => {
    setSelectedOptionType(newValue);
  }

  return (
    <SelectTypeStyled medium='medium' disable='disable'>
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
