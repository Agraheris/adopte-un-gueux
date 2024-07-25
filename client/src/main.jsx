import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import getProfil from "./services/profils";

import App from "./App";
import Accueil from "./pages/Accueil";
import Cart from "./pages/Cart";
import Chat from "./pages/Chat";

import { CartProvider } from "./contexts/CartContext";
import UserDescriptif from "./components/UserDescriptif";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
        loader: getProfil,
      },
      {
        path: "/:id",
        element: <UserDescriptif />,
        loader: getProfil,
      },
      {
        path: "/cart",
        element: <Cart />,
        loader: getProfil,
      },
      {
        path: "/chat",
        element: <Chat />,
        loader: getProfil,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
