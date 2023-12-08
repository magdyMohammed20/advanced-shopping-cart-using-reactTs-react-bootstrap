import { RouterProvider } from "react-router-dom";
import NavbarComponent from "./components/Navbar/Navbar";
import routers from "./utils/routers";

const App = () => {
  return (
    <>
      <NavbarComponent />
      <RouterProvider router={routers} />
    </>
  );
};

export default App;
