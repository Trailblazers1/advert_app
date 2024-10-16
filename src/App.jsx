
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import DashboardLayouts from './layouts/DashboardLayouts'
import Overview from './pages/Vendordashboard/Overview'
import Adddetails from './pages/Vendordashboard/Adddetails'
import ProductDetails from './pages/Vendordashboard/ProductDetails'
import About from './pages/About'


function App() {
  const routter = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About/>
    },
  

  {
      path: "/dashboard",
      element: <DashboardLayouts />,
      children: [
        {
          index: true,
          element: <Overview />
        },

        {
          path: "add-details",
          element: <Adddetails />
        },

        {
          path: "product-details",
          element: <ProductDetails />
        }
      ]
    }

  ])

  return (
    <RouterProvider router={routter} />
  )

}

export default App
