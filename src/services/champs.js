import axios from 'axios'

export const fetchData = async () => {
  try {
    const response = await axios('https://ddragon.leagueoflegends.com/cdn/14.6.1/data/en_US/champion.json')
    const { data } = response.data
    const championsArray = Object.values(data)
    const championCreate = championsArray.map(champ => (champ.id)
    )
    return championCreate
  } catch (error) {
    console.error('Error al obtener los datos:', error)
    throw error
  }
}

export const fetchDataItems = async () => {
    try {
      const response = await axios('https://ddragon.leagueoflegends.com/cdn/14.6.1/data/en_US/item.json')
      const { data } = response.data
      const itemsArray = Object.values(data)
      const itemsCreate = itemsArray.map(item => (
        item
      )
      )
      return itemsCreate
    } catch (error) {
      console.error('Error al obtener los datos:', error)
      throw error
    }
  }
  
  export const fetchChampionDetails = async (id) => {
    try {
      const response = await axios(`https://ddragon.leagueoflegends.com/cdn/14.6.1/data/en_US/champion/${id}.json`)
      const { data } = response.data
      return data[id]
    } catch (error) {
      console.error('Error al obtener los datos:', error)
      throw error
    }
  }
  