import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <>PAGE D'ACCUEIL</>,
        },
        {
          path: "/products",
          element: <>PAGE PRODUITS</>,
        },
      ],
    },
  ]);

  function Root() {
    return (
      <div className="root-container">
        <Navbar />
        <div className="outlet">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  }

  return <RouterProvider router={router} />;
}

export default App;
