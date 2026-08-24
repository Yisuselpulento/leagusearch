import { useEffect, useState } from 'preact/hooks'

const readFavorites = () => {
  try {
    return JSON.parse(window.localStorage.getItem('favorites')) || []
  } catch {
    return []
  }
}

const FavoriteButton = ({ champ }) => {
  const [isFav, setIsFav] = useState(false)

  // El estado real vive en localStorage; se lee tras hidratar.
  useEffect(() => {
    setIsFav(readFavorites().includes(champ))
  }, [champ])

  const toggle = () => {
    const favorites = readFavorites()
    const next = favorites.includes(champ)
      ? favorites.filter(fav => fav !== champ)
      : [...favorites, champ]
    window.localStorage.setItem('favorites', JSON.stringify(next))
    setIsFav(!isFav)
  }

  return (
    <button
      onClick={toggle}
      class={`px-3 py-1 rounded border w-full md:w-[82px] m-2 text-white transition ${
        isFav
          ? 'bg-red-700 hover:bg-red-800 border-red-900'
          : 'dark:bg-blue-700 bg-blue-900 dark:bg-opacity-20 dark:hover:bg-opacity-60 hover:bg-opacity-80 border-blue-900'
      }`}
    >
      {isFav ? 'Quitar' : 'Agregar'}
    </button>
  )
}

export default FavoriteButton
