'use client'

import SectionHero from './SectionHero';
import SearchFilter from './SearchFilter';
import SectionEvents from './SectionEvents';

// Context
import { SelectionContextEventType } from '../../Context/SelectionContextEventType'

const PageHome = () => {

  return (
    <SelectionContextEventType>
      <SectionHero />
      <SearchFilter />
      <SectionEvents />
    </SelectionContextEventType>
  )
}

export default PageHome;