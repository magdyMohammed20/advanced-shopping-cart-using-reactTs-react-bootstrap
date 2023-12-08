import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { routes } from "./utils/routers";
import { QueryClient, QueryClientProvider } from "react-query";
import { ShoppingCartProvider } from "./context/shoppingCartContext";
import { ClerkProvider } from "@clerk/clerk-react";
import "./main.css";
import NavbarComponent from "./components/Navbar/Navbar";
import NotFound from "./pages/404/NotFound";

const client = new QueryClient();

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error("Missing Publishable Key");
}
const renderRoutes = routes.map((route) => (
  <Route path={route.path} key={route.path} element={route.element} />
));

//const allRoutes = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <QueryClientProvider client={client}>
        <ClerkProvider publishableKey={clerkPubKey}>
          <BrowserRouter>
            <NavbarComponent />
            <Routes>
              {renderRoutes}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ClerkProvider>
      </QueryClientProvider>
    </ShoppingCartProvider>
  </React.StrictMode>
);
