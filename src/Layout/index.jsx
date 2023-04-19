import Header from '../Components/Header/Header'
import { Outlet } from "react-router-dom"
import NavBar from '../Components/NavBar/NavBar'


const Root = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Outlet />
    </>
  )
}

export default Root