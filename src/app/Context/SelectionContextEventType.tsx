import React, { createContext, useContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

interface SelectionContextType {
  selectedOption: Option | null;
  setSelectedOption: (newValue: Option | null) => void;
  isOnline: boolean;
  setIsOnline: (newValue: boolean) => void;
}

interface Option {
  value: string;
  label: string;
}

const SelectionContextType = createContext<SelectionContextType | undefined>(undefined);

export const SelectionContextEventType = ({ children }: Props) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null); //Pega o valor do primeiro component
  const [isOnline, setIsOnline] = useState(false); //Passa o valor para o segundo component

  return (
    <SelectionContextType.Provider value={{ selectedOption, setSelectedOption, isOnline, setIsOnline }}>
      {children}
    </SelectionContextType.Provider>
  );
};

export const useSelection = () => {
  const context = useContext(SelectionContextType);
  if (context === undefined) {
    throw new Error('useSelection deve ser usado dentro de um SelectionProvider');
  }
  return context;
};
