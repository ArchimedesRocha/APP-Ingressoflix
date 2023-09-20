// Imports
import Select from 'react-select';

// Context
import { useSelection } from '../../Context/SelectionContextEventType';

// Style
import ButtonSelectTypeCreateEventStyled from "./style"

// Interfaces
interface Option {
  value: string;
  label: string;
}

interface Props {
  textType: string;
}

const ButtonSelectTypeCreateEvent = ({ textType }: Props) => {

  const { selectedOption, setSelectedOption, setIsOnline } = useSelection();

  const initialSelectedOption: Option = {
    value: "select",
    label: textType,
  };

  const options = [
    { value: 'presencial', label: 'Presencial' },
    { value: 'online', label: 'Online' }
  ];

  const handleSelectChangeTypeCreateEvent = (newValue: { value: string; label: string } | null) => {
    setSelectedOption(newValue);

    if (newValue?.value === 'online') {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }
  };

  return (
    <ButtonSelectTypeCreateEventStyled medium='medium' disable='disable'>
      <Select
        key="select-component-type-create-event"
        value={selectedOption || initialSelectedOption}
        onChange={handleSelectChangeTypeCreateEvent}
        options={options}
        classNamePrefix="select-type-create-event"
        classNames={{
          control: (state) =>
            `${state.isFocused ? 'selected' : 'unselected'} ${selectedOption?.value !== 'select' ? 'selected' : ''
            }`
        }}
      />
    </ButtonSelectTypeCreateEventStyled>
  );
};

export default ButtonSelectTypeCreateEvent;