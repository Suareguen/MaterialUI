import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import { useParams } from 'react-router-dom'
import getPokemonById from '../../Service/getPokemonById'
import { useState, useEffect } from 'react'


const Pokemon = () => {
const [data, setData] = useState([])
const { pokemonId } = useParams()

useEffect(() => {
    getPokemon()
}, [])

const getPokemon = async () => {
    const result = await getPokemonById(pokemonId)
    
    setData(result)
}


const displayPokemon = () => {
    console.log(data.name)
        return (
            <>
                <PokemonCard name={ data.name }/>
            </>
        )
}


  return (
    <>
        { displayPokemon() }
    </>
  )
}

export default Pokemon