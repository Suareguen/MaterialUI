import './ShowPokemon.css'
import Pokedex from '../../Components/PokemonCardList/PokemonCardList'
import { useState, useEffect } from 'react'
import  getAllPokemon  from '../../Service/getAllPokemon'
import  getPokemonById  from '../../Service/getPokemonById'

const ShowPokemon = () => {
  const [data, setData] = useState([])
  const [pokemonOrder, setPokemonOrder] = useState([])
  useEffect(() => {
    getPokemon()
  }, [])

  const getPokemon = async () => {
    const pokemon = await getPokemonById('bulbasaur')
    const result = await getAllPokemon()
    setData(result)
    setPokemonOrder(pokemon)
    console.log(result)
    console.log(pokemon.order)
  }

  const showPokemons = () => {
    return data.map((pokemon, idx) => {
        return <Pokedex key={ idx } name={ pokemon.name } url={ pokemon.url }  />
    })
  }

  return (
    <div className='container'>
        { showPokemons() }
    </div>
  )
}

export default ShowPokemon