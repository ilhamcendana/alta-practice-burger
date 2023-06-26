import React, { useState } from "react";
import "./App.css";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import BurgerApp from "./pages/burger-app";
import WeAreHiring from "./pages/we-are-hiring";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BurgerApp />,
    },
    {
      path: "/we-are-hiring",
      element: <WeAreHiring />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
