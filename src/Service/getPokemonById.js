import api from "./config"

const getPokemonById = async (query) => {
    const { data } = await api.get(`/pokemon/${ query }?limit=151`)
    return data
}

export default getPokemonById