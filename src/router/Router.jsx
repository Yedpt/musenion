import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Layout from "../layout/Layout";
import CreateMeme from "../pages/CreateMeme.jsx";
import Galery from "../pages/Galery.jsx";
import Contact from "../pages/Contact.jsx"
import AboutUs from "../pages/AboutUs.jsx";
import EditMeme from "../pages/EditMeme.jsx";
import MemeDetail from "../pages/MemeDetail.jsx";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";




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
        path:'nav',
        element: <Nav/>
    },
    {
        path:'footer',
        element: <Footer/>
    },
]

}])

