import { ChangeEvent } from 'react'

import './Searchbar.scss'

type SearchbarProps = {
  searchInput: string
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Searchbar: React.FC<SearchbarProps> = ({
  searchInput,
  handleChange,
}) => {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search for a pokemon</label>
      <input
        id="search"
        type="text"
        value={searchInput}
        onChange={handleChange}
      />
    </div>
  )
}

export default Searchbar
