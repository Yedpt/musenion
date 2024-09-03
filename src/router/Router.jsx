import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Layout from "../layout/Layout";
import CreateMeme from "../pages/CreateMeme.jsx";

export const router = createBrowserRouter([{
    
    path : '/',
    element: <Layout/>,
    children: [
        {
            index: true,
            element: <Home/>
    },
    {
        path: 'newmeme',
        element: <CreateMeme/>
    }
]

}])

