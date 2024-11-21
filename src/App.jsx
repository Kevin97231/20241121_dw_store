import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";

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
      <>
        <div className="m-20 bg-black">NAVBAR</div>
        <Outlet />
        <div>FOOTER</div>
      </>
    );
  }

  return <RouterProvider router={router} />;
}

export default App;
