import axios from 'axios'

const DD = 'https://ddragon.leagueoflegends.com'
const MERAKI = 'https://cdn.merakianalytics.com/riot/lol/resources/latest/en-US'
const FALLBACK_VERSION = '14.6.1'

// --- Versión de Data Dragon: siempre el último parche, cacheada en el build ---
let _version
export const getVersion = async () => {
  if (_version) return _version
  try {
    const { data } = await axios(`${DD}/api/versions.json`)
    _version = data[0]
  } catch (error) {
    console.error('No se pudo obtener la versión de DDragon, usando fallback:', error)
    _version = FALLBACK_VERSION
  }
  return _version
}

// --- Data base: Data Dragon (oficial, siempre actual, cubre TODOS los campeones/items) ---
export const fetchData = async () => {
  try {
    const v = await getVersion()
    const { data } = await axios(`${DD}/cdn/${v}/data/en_US/champion.json`)
    return Object.values(data.data)
  } catch (error) {
    console.error('Error al obtener los datos:', error)
    throw error
  }
}

export const fetchDataItems = async () => {
  try {
    const v = await getVersion()
    const { data } = await axios(`${DD}/cdn/${v}/data/en_US/item.json`)
    // Conservar la clave numérica como id (necesaria para el routing).
    return Object.entries(data.data).map(([id, item]) => ({ id, ...item }))
  } catch (error) {
    console.error('Error al obtener los datos:', error)
    throw error
  }
}

export const fetchChampionDetails = async (id) => {
  try {
    const v = await getVersion()
    const { data } = await axios(`${DD}/cdn/${v}/data/en_US/champion/${id}.json`)
    return data.data[id]
  } catch (error) {
    console.error('Error al obtener los datos:', error)
    throw error
  }
}

// --- Enriquecimiento: Meraki (datos más ricos). Un solo fetch bulk, cacheado. ---
// Meraki puede ir un par de parches atrás, por eso NO es la fuente base: solo
// añade info extra donde existe. Los campeones que aún no tiene (los más nuevos)
// simplemente no reciben el enriquecimiento (fallback silencioso a DDragon).
let _merakiChamps
export const getMerakiChampions = async () => {
  if (_merakiChamps) return _merakiChamps
  try {
    const { data } = await axios(`${MERAKI}/champions.json`)
    _merakiChamps = data
  } catch (error) {
    console.error('Meraki no disponible, se omite el enriquecimiento:', error)
    _merakiChamps = {}
  }
  return _merakiChamps
}

export const fetchMerakiChampion = async (id) => {
  const all = await getMerakiChampions()
  return all[id] ?? null
}
