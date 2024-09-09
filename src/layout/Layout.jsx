// nav y footer  
import { Outlet } from 'react-router-dom'
// import Nav from '.'

const layout = () => {
  return (
    <>
      <nav>Mi nav</nav>
      <Outlet/>
      <footer>Mi footer</footer>
    </>
  
  )
}

export default layout
