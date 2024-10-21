import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import DashboardLayouts from "./layouts/DashboardLayouts";
import Overview from "./pages/Vendordashboard/Overview";
import Adddetails from "./pages/Vendordashboard/Adddetails";
import ProductDetails from "./pages/Vendordashboard/ProductDetails";
import About from "./pages/About";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar";
import Alerts from "./pages/Vendordashboard/Alerts";
import Ads from "./pages/Vendordashboard/Ads";
import Verify from "./pages/Vendordashboard/Verify";
import Settings from "./pages/Vendordashboard/Settings";
import Reports from "./pages/Vendordashboard/Reports";
import ContactUs from "./pages/ContactUs";

function App() {
  const routter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },

    {
      path: "/sidebar",
      element: <Sidebar />,
    },

    {
      path: "/contact",
      element: <ContactUs />,
    },

    {
      path: "/dashboard",
      element: <DashboardLayouts />,
      children: [
        {
          index: true,
          element: <Overview />,
        },

        {
          path: "add-details",
          element: <Adddetails />,
        },

        {
          path: "product-details",
          element: <ProductDetails />,
        },

        {
          path: "ads",
          element: <Ads />,
        },
        {
          path: "reports",
          element: <Reports />,
        },

        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "alerts",
          element: <Alerts />,
        },

        {
          path: "verify",
          element: <Verify />,
        },
      ],
    },
  ]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <RouterProvider router={routter} />
    </>
  );
}

export default App;
