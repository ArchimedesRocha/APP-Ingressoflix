// Imports
import { useState } from "react";
import Select from 'react-select';

// Style
import SelectModalityStyled from "./style"

// Interfaces
interface Option {
  value: string;
  label: string;
}

interface Props {
  textModality: string;
}

const SelectModality = ({ textModality }: Props) => {

  const [selectedOptionModality, setSelectedOptionModality] = useState<Option | null>(
    { value: 'select', label: `${textModality}` }
  );

  const options: Option[] = [
    { value: 'gratuito', label: 'Gratuito' },
    { value: 'pago', label: 'Pago' }
  ]

  const handleSelectChangeType = (
    newValue: Option | null
  ) => {
    setSelectedOptionModality(newValue);
  }

  return (
    <SelectModalityStyled medium disable>
      <Select
        key="select-component-modality"
        value={selectedOptionModality}
        onChange={handleSelectChangeType}
        options={options}
        classNamePrefix="select-modality"
        classNames={{
          control: (state) =>
            `${state.isFocused ? 'selected' : 'unselected'} ${selectedOptionModality?.value !== 'select' ? 'selected' : ''}`,
        }}
      />
    </SelectModalityStyled>
  )
}

export default SelectModality;
