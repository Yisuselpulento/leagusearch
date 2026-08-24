import axios from 'axios'
import { DDRAGON_CDN } from './constants'

export const fetchData = async () => {
  try {
    const response = await axios(`${DDRAGON_CDN}/data/en_US/champion.json`)
    const { data } = response.data
    return Object.values(data).map(champ => champ.id)
  } catch (error) {
    console.error('Error al obtener los datos:', error)
    throw error
  }
}

export const fetchDataItems = async () => {
  try {
    const response = await axios(`${DDRAGON_CDN}/data/en_US/item.json`)
    const { data } = response.data
    // Conservar la clave numérica como id: es necesaria para la ruta de detalle
    // (el image.full contiene ".png" y rompe el routing de Astro).
    return Object.entries(data).map(([id, item]) => ({ id, ...item }))
  } catch (error) {
    console.error('Error al obtener los datos:', error)
    throw error
  }
}

export const fetchChampionDetails = async (id) => {
  try {
    const response = await axios(`${DDRAGON_CDN}/data/en_US/champion/${id}.json`)
    const { data } = response.data
    return data[id]
  } catch (error) {
    console.error('Error al obtener los datos:', error)
    throw error
  }
}
