import { useState } from 'preact/hooks'
import { DDRAGON_CDN } from '../services/constants'

const SearchBar = ({ champs = [] }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredChampions = searchTerm.length > 0
    ? champs.filter(champion =>
      champion.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : []

  return (

    <form className='w-full' onSubmit={(e) => e.preventDefault()}>
      <label htmlFor='default-search' className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>Search</label>
      <div className='relative '>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
          <svg className='w-4 h-4 text-gray-500 dark:text-gray-400' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z' />
          </svg>
        </div>
        <input
          type='search'
          id='default-search'
          className='block md:w-[700px] h-16 md:h-20 w-full  md:text-lg font-bold p-2 ps-10  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Busca a tu campeon'
          value={searchTerm}
          onInput={handleSearchChange}
        />

        {filteredChampions.length > 0 && (
          <ul className='overflow-auto max-h-[400px] scrollbar scrollbar-thumb-indigo-700 absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg text-left'>
            {filteredChampions.map((champion) => (
              <li key={champion.id} className='w-full'>
                <a
                  href={`/champs/${champion.id}`}
                  className='w-full hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer flex items-center gap-3 p-3 text-gray-800 dark:text-white'
                >
                  <img
                    className='w-8 h-8 rounded'
                    src={`${DDRAGON_CDN}/img/champion/${champion.id}.png`}
                    alt={champion.name}
                    loading='lazy'
                  />
                  {champion.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>

  )
}

export default SearchBar
