import { useEffect, useState } from 'preact/hooks'
import { DDRAGON_CDN } from '../services/constants'

const readFavorites = () => {
  try {
    return JSON.parse(window.localStorage.getItem('favorites')) || []
  } catch {
    return []
  }
}

const FavoritesList = () => {
  const [favorites, setFavorites] = useState([])
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setFavorites(readFavorites())
    setReady(true)
  }, [])

  const remove = (champ) => {
    const next = favorites.filter(fav => fav !== champ)
    setFavorites(next)
    window.localStorage.setItem('favorites', JSON.stringify(next))
  }

  // Evita el parpadeo de "sin favoritos" antes de leer localStorage.
  if (!ready) return null

  if (favorites.length === 0) {
    return (
      <p class='text-gray-500 dark:text-gray-300 font-bold text-lg'>
        No tienes ningún campeón en favoritos aún.
      </p>
    )
  }

  return (
    <div class='flex flex-wrap gap-5'>
      {favorites.map((champ) => (
        <div key={champ} class='flex flex-col gap-2 items-center'>
          <a
            href={`/champs/${champ}`}
            class='flex flex-col gap-2 items-center bg-blue-950 md:bg-transparent p-1 rounded-lg'
          >
            <img
              class='w-[80px] h-[80px]'
              src={`${DDRAGON_CDN}/img/champion/${champ}.png`}
              alt={champ}
              loading='lazy'
            />
            <p>{champ}</p>
          </a>
          <button
            onClick={() => remove(champ)}
            class='px-3 py-1 rounded border border-red-900 bg-red-700 hover:bg-red-800 text-white w-full'
          >
            Quitar
          </button>
        </div>
      ))}
    </div>
  )
}

export default FavoritesList
