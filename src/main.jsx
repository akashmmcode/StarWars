import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HeaderComponent, ResidentComponent } from "../Components/index.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      {/* <App /> */}
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/residentdetails/:id",
        element: <ResidentComponent />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />);

// <React.StrictMode>
{
  /* </React.StrictMode> */
}
