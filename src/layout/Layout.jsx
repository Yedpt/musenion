// nav y footer  
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const layout = () => {
  return (
    <>
      {/* <nav>Mi nav</nav> */}
      <Outlet/>
      <footer>Mi footer</footer>
    </>
  
  )
}

export default layout
