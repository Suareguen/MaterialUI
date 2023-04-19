import './ShowPokemon.css'
import PokemonCard from '../../Components/PokemonCard/PokemonCard'
import { useState, useEffect } from 'react'
import getRandomPokemon from '../../Service/getRandomPokemon'

const ShowPokemon = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    getPokemon()
  }, [])



  const getPokemon = async () => {
    const result = await getRandomPokemon()
    console.log(result)
    setData(result)
  }


  const showPokemons = () => {
    console.log(data)
    return data.map((pokemon, idx) => {
        <PokemonCard key={ idx } name={ pokemon.name } url={ pokemon.url } />
    })
  }





  return (
    <>
        { showPokemons() }
    </>
  )
}

export default ShowPokemon