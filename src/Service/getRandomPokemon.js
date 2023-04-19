import api from "./config"

const getRandomPokemon = async () => {
    const { data } = await api.get(`/pokemon`)
    //console.log(data.results)
    return data.results
}

export default getRandomPokemon