import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Layout from "../layout/Layout";
import CreateMeme from "../pages/CreateMeme.jsx";
import Galery from "../pages/Galery.jsx";
import Contact from "../pages/Contact.jsx"
import AboutUs from "../pages/AboutUs.jsx";
import EditMeme from "../pages/EditMeme.jsx";
import MemeDetail from "../pages/MemeDetail.jsx";
<<<<<<< HEAD
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";



=======
import FormPutMeme from "../pages/FormPutMeme.jsx"; // Importa el componente para el formulario
>>>>>>> 10bd5a040b64b386ce84f284cbc268f326e9490c

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
        path:'edit',
        element: <EditMeme/>
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
<<<<<<< HEAD
        path:'nav',
        element: <Navbar/>
    },
    {
        path:'footer',
        element: <Footer/>
=======
        path: "/meme/:id", // Ruta para ver los detalles del meme
        element: <MemeDetail />,
    },
    {
        path:'/edit/:id', // Ruta para editar el meme
        element: <FormPutMeme/>, //la página de edición
>>>>>>> 10bd5a040b64b386ce84f284cbc268f326e9490c
    },
]

}])

