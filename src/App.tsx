import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Index from "./pages/Index";
import Channels from "./pages/Channels";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Outlet />}>
        <Route index element={<Index />} />
        <Route path="/channels" element={<Channels />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
