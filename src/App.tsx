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
import SocketProvider from "./components/providers/SocketProvider";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Outlet />}>
        <Route index element={<Index />} />
        <Route path="/channels" element={<Channels />} />
      </Route>
    )
  );

  return (
    <SocketProvider>
      <RouterProvider router={router} />
    </SocketProvider>
  );
}

export default App;
