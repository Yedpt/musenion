import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Layout from "../layout/Layout";
import CreateMeme from "../pages/CreateMeme.jsx";
import Galery from "../pages/Galery.jsx";
import Contact from "../pages/Contact.jsx"
import AboutUs from "../pages/AboutUs.jsx";


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
        element: <editMeme/>
    },
    {
        path:'contactus',
        element: <Contact/>
    },
    {
        path:'aboutus',
        element: <AboutUs/>
    },
]

}])

