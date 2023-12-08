import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { routes } from "../../utils/routers";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Navbar, Badge } from "react-bootstrap";
import styles from "./style.module.css";
import { useShoppingCart } from "../../context/shoppingCartContext";
import Cart from "../Cart/Cart";
import { UserButton, useAuth } from "@clerk/clerk-react";
import { useClerk } from "@clerk/clerk-react";
const flexClasses = "d-flex align-items-center justify-content-center";
const NavbarComponent = () => {
  const navigate = useNavigate();
  const { signOut } = useClerk();
  const { cartQuantity, toggleCart, openCart, cartItems } = useShoppingCart();

  const { isLoaded, userId, sessionId } = useAuth();

  // In case the user signs out while on the page.
  if (!isLoaded || !userId) {
    return null;
  }

  const renderLinks = routes.map((route) => (
    <>
      {route.name != "signIn" && (
        <Nav.Link as={NavLink} key={route.path} to={route.path}>
          {route.name}
        </Nav.Link>
      )}
    </>
  ));
  return (
    <Navbar sticky="top" bg="light" data-bs-theme="light">
      <Cart openCart={openCart} toggleCart={toggleCart} cartItems={cartItems} />
      <Container>
        <Navbar.Brand href="#home" className="fw-bold">
          Shopping
        </Navbar.Brand>
        <Nav className="me-auto">{renderLinks}</Nav>
        {!userId && !sessionId ? (
          <Button
            className="me-3"
            variant="dark"
            onClick={() => navigate("/sign-in")}>
            Sign In
          </Button>
        ) : (
          <div className="me-2 d-flex">
            <UserButton />
            <Button
              className=" ms-3"
              variant="danger"
              size="sm"
              onClick={() => signOut(() => navigate("/sign-in"))}>
              Sign out
            </Button>
          </div>
        )}

        <Button
          onClick={() => toggleCart()}
          variant="outline-secondary"
          className={`position-relative  rounded-circle p-0 ${styles.shoppingcart} ${flexClasses}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-bag"
            viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
          </svg>

          <Badge
            pill
            bg="danger"
            className={`position-absolute ${styles.absPosition} ${flexClasses}`}>
            {cartQuantity}
          </Badge>
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
