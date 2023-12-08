import React from "react";
import { Button, Stack } from "react-bootstrap";
import FormatCurrency from "../../utils/formatCurrency";
import { useShoppingCart } from "../../context/shoppingCartContext";
import { cartItem } from "../../types/contextTypes";

const CartItem: React.FC<cartItem> = ({ id, quantity }) => {
  const { products, removeFromCart } = useShoppingCart();

  const findProduct = products.find((i) => i.id == id)!;
  return (
    <Stack direction="horizontal" gap={3} className="d-flex">
      <div className="d-flex align-items-center">
        <img
          key={findProduct?.image}
          src={findProduct?.image}
          style={{ width: "115px", height: "75px", objectFit: "cover" }}
        />
        <div className="d-flex flex-column ps-3">
          <h6>{findProduct.title.slice(0, 10)}</h6>
          <span
            className="text-muted font-bold d-flex"
            style={{ fontSize: "14px" }}>
            <span className="me-1 ">
              {FormatCurrency({ price: findProduct.price })}
            </span>
            {quantity > 1 && (
              <>
                {"   "} x {quantity}
              </>
            )}
          </span>
        </div>
      </div>
      <div className="ms-auto d-flex align-items-center">
        <span className="fw-bold me-1" style={{ fontSize: "12px" }}>
          {FormatCurrency({ price: findProduct.price * quantity })}
        </span>
        <Button
          onClick={() => removeFromCart(id)}
          style={{ width: "40px", height: "40px" }}
          variant="outline-danger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
          </svg>
        </Button>
      </div>
    </Stack>
  );
};

export default CartItem;
