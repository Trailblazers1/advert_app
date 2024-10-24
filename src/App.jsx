import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import DashboardLayouts from "./layouts/DashboardLayouts";
import AddAdverts from "./pages/Vendordashboard/AddAdverts";
import About from "./pages/About";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar";
import Alerts from "./pages/Vendordashboard/Alerts";
import Verify from "./pages/Vendordashboard/Verify";
import Settings from "./pages/Vendordashboard/Settings";
import Reports from "./pages/Vendordashboard/Reports";
import Overview from "./pages/Vendordashboard/Overview";
import AdvertDetail from "./pages/Vendordashboard/AdvertDetail";
import ContactUs from "./pages/ContactUs";
import AuthForm from "./pages/authForm";
import UserAddDetails from "./pages/userdashboard/UserAddDetail";
import VendorLogin from "./pages/vendorLogin/login";
import ForgotPassword from "./pages/forgotPassword";

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
      path: "/authForm",
      element: <AuthForm />,
    },

    { path: "/vendorLogin", element: <VendorLogin /> },

    {
      path: "/forgotPassword",
      element: <ForgotPassword />,
    },

    {
      path: "homeadds/:id",
      element: <UserAddDetails />,
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
          path: "add-adverts",
          element: <AddAdverts />,
        },

        {
          path: "advert-details",
          element: <AdvertDetail />,

          path: "adds/:id",
          element: <AdvertDetail />,

          path: "adds/:id",
          element: <AdvertDetail />,
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
