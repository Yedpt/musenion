// nav y footer  
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; 

const Layout = () => {
  return (
    <>
      <Navbar /> {/* Agregar Navbar */}
      <main>
        <Outlet />
      </main>
      <Footer /> {/* Agregar Footer */}
    </>
  );
};

export default Layout;