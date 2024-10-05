import { useState } from "preact/hooks"

const SearchBar = () => {
/*  const { allChampions } = usechamps() */
/*   const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const filteredChampions = allChampions.filter(champion => {
    return champion && champion && champion.toLowerCase().includes(searchTerm.toLowerCase())
  })  */

  return (

    <form className='w-full'>
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
 /*        value={searchTerm}
          onChange={handleSearchChange} */
          required
        />

     
  {/*     {searchTerm.length > 0 && (
          <ul className='overflow-auto max-h-[400px] scrollbar scrollbar-thumb-indigo-700 absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg'>
            {filteredChampions.map((champion, index) => (
              <li key={index} className='w-full'>
                <Link
                  to={`../champion/${champion}`}
                  className='w-full hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer block p-3 '
                >
                  {champion}
                </Link>
              </li>
            ))}
          </ul>
        )}  */}
      </div> 
    </form>

  )
}

export default SearchBar
