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
    if( data.length !== 0 ) {
        if(data.types.length === 1) {
            const types = [ data.types[0].type.name ]
            return (
                <>
                    <PokemonCard
                        name={ data.name }
                        types ={ types }
                        sprite={ data.sprites.front_default }
                    />
                </>
            )
        } else {
           const types = [ data.types[0].type.name, data.types[1].type.name ]
           return (
            <>
                <PokemonCard
                    name={ data.name }
                    types ={ types }
                    sprite={ data.sprites.front_default }
                />
            </>
        )
        }
    }
}


  return (
    <>
        { displayPokemon() }
    </>
  )
}

export default Pokemon