import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Applayout from "./components/layout/Applayout"
import Home from "./pages/Home"
// import About from "./pages/About"
import Movies from "./pages/Movies"
import Contact from "./pages/Contact"
import ErrorPage from "./pages/ErrorPage"
import { fetchData }from "./api/Fetchapi"
// import MovieDetails from "./components/UI/MovieDetails"
import{ MovieDetails }from "./components/UI/MovieDetails"
import {getmovieDetails} from "./api/GetmovieDetails"
import { contactData } from "./pages/Contact"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      errorElement : <ErrorPage/>,
      children : [
        {
        path: "/",
        element: <Home />,
        },
        // {
        //   path: "/about",
        //   element: <About />,
        //   },
          {
            path: "/movies",
            element: <Movies />,
            loader : fetchData
            },
            {
              path: "/movies/:movieID",
              element: <MovieDetails />,
              loader : getmovieDetails
              
              },
            {
              path: "/contact",
              element: <Contact />,
              action: contactData
              }
      ]
    }
  ]);
  return (
    <RouterProvider router={router}/>   
  )
}

export default App







