import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Index from "./pages/Index";
import Channels from "./pages/Channels";
import Root from "./pages/base/Root";
import SocketProvider from "./components/providers/SocketProvider";
import MessageProvider from "./components/providers/MessageProvider";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Index />} />
        <Route
          path="/channels"
          element={
            <MessageProvider>
              <Channels />
            </MessageProvider>
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
