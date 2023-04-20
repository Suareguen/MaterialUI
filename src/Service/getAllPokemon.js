import api from "./config"

const getAllPokemon = async () => {
    const { data } = await api.get(`/pokemon?limit=151`)
    return data.results
}

export default getAllPokemon