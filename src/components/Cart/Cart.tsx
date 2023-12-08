import Offcanvas from "react-bootstrap/Offcanvas";
import { cartTypes } from "../../types/cartTypes";
import CartItem from "./CartItem";
import { Alert, Stack } from "react-bootstrap";
import FormatCurrency from "../../utils/formatCurrency";
import { useShoppingCart } from "../../context/shoppingCartContext";

const Cart: React.FC<cartTypes> = ({ openCart, toggleCart, cartItems }) => {
  const { products } = useShoppingCart();
  return (
    <>
      <Offcanvas show={openCart} onHide={toggleCart} placement={"start"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.length != 0 ? (
            <Stack gap={3}>
              {cartItems.map((item) => (
                <CartItem {...item} key={item.id} />
              ))}

              <h5 className="d-flex">
                Total : {"   "}
                {FormatCurrency({
                  price: cartItems.reduce((total, it) => {
                    const find = products.find((i) => i.id == it.id);
                    return total + (find?.price || 0) * it.quantity;
                  }, 0),
                })}
              </h5>
            </Stack>
          ) : (
            <Alert variant="primary">No Products In Cart</Alert>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
