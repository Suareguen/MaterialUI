import { createBrowserRouter } from "react-router-dom"
import Root from "../Layout/index"
import LoginForm from "../Pages/Login/Login"
import ShowPokemon from "../Pages/List Pokemon/ShowPokemon"
import PokemonCard from '../Components/PokemonCard/PokemonCard'
import Pokemon from '../Pages/Pokemon/Pokemon'


const router = createBrowserRouter([
  {

    path: '/',
    element:<Root />,
    children: [
      {
        path:'/',
        element:<LoginForm />
      },
      {
        path:'/pokemon',
        element:<ShowPokemon />
      },
      {
        path:'/pokemon/:pokemonId',
        element:<Pokemon />
      }
    ]
  }
])

export default router