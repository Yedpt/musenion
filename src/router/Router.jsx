import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Layout from "../layout/Layout";
import CreateMeme from "../pages/CreateMeme.jsx";
import Galery from "../pages/Galery.jsx";
import Contact from "../pages/Contact.jsx"
import AboutUs from "../pages/AboutUs.jsx";
// import EditMeme from "../pages/EditMeme.jsx";
import MemeDetail from "../pages/MemeDetail.jsx";
import FormPutMeme from "../pages/FormPutMeme.jsx"; // Importa el componente para el formulario
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";




export const router = createBrowserRouter([{
    
    path : '/',
    element: <Layout/>,
    children: [
        {
            index: true,
            element: <Home/>
    },
    {
        path: 'gallery',
        element: <Galery/>
    },
    {
        path:'creatememe',
        element: <CreateMeme/>
    },
    {
        path:'contactus',
        element: <Contact/>
    },
    {
        path:'MemeDetail/:id',
        element: <MemeDetail/>
    },
    {
        path:'aboutus',
        element: <AboutUs/>
    },
    {
        path:'/edit/:id', // Ruta para editar el meme
        element: <FormPutMeme/>

    },

    {path:'nav',
        element: <Navbar/>
    },
    {
        path:'footer',
        element: <Footer/>
    },
]

}])

