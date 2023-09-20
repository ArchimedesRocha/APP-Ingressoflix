// Imports
import { useState } from "react";
import Select from 'react-select';

// Context
import { useSelection } from '../../Context/SelectionContextEventType';

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

  const { selectedOption, setSelectedOption, setIsOnline } = useSelection();

  const initialSelectedOption: Option = {
    value: "select",
    label: textType,
  };

  const options = [
    { value: 'presencial', label: 'Presencial' },
    { value: 'online', label: 'Online' }
  ];

  const handleSelectChangeType = (newValue: { value: string; label: string } | null) => {
    setSelectedOption(newValue);

    if (newValue?.value === 'online') {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }
  };

  return (
    <SelectTypeStyled medium='medium' disable='disable'>
      <Select
        key="select-component-type"
        value={selectedOption || initialSelectedOption}
        onChange={handleSelectChangeType}
        options={options}
        classNamePrefix="select-type"
        classNames={{
          control: (state) =>
            `${state.isFocused ? 'selected' : 'unselected'} ${selectedOption?.value !== 'select' ? 'selected' : ''
            }`
        }}
      />
    </SelectTypeStyled>
  );
};

export default SelectType;

// const [selectedOptionType, setSelectedOptionType] = useState<Option | null>(
//   { value: 'select', label: `${textType}` }
// );

// const options: Option[] = [
//   { value: 'presencial', label: 'Presencial' },
//   { value: 'online', label: 'Online' }
// ]

// const handleSelectChangeType = (
//   newValue: Option | null
// ) => {
//   setSelectedOptionType(newValue);
// }

//   return (
//     <SelectTypeStyled medium='medium' disable='disable'>
//       <Select
//         key="select-component-type"
//         value={selectedOptionType}
//         onChange={handleSelectChangeType}
//         options={options}
//         classNamePrefix="select-type"
//         classNames={{
//           control: (state) =>
//             `${state.isFocused ? 'selected' : 'unselected'} ${selectedOptionType?.value !== 'select' ? 'selected' : ''}`,
//         }}
//       />
//     </SelectTypeStyled>
//   )
// }

// export default SelectType;
