import { createBrowserRouter } from "react-router-dom"
import Root from "../Layout/index"
import LoginForm from "../Pages/Login/Login"
import ShowPokemon from "../Pages/ShowPokemon/ShowPokemon"


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
      }
    ]
  }
])

export default router