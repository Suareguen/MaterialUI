import './ShowPokemon.css'
import Pokedex from '../../Components/PokemonCardList/PokemonCardList'
import { useState, useEffect } from 'react'
import getAllPokemon from '../../Service/getRandomPokemon'

const ShowPokemon = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    getPokemon()
  }, [])



  const getPokemon = async () => {
    const result = await getAllPokemon()
    setData(result)
  }


  const showPokemons = () => {
    return data.map((pokemon, idx) => {
        return <Pokedex key={ idx } name={ pokemon.name } url={ pokemon.url } />
    })
  }





  return (
    <div className='container'>
        { showPokemons() }
    </div>
  )
}

export default ShowPokemon