import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { productTypes } from "../../types/productsTypes";
import styles from "./product.module.css";
import FormatCurrency from "../../utils/formatCurrency";
import { useShoppingCart } from "../../context/shoppingCartContext";

const ProductCard: React.FC<productTypes> = ({
  id,
  title,
  price,
  image,
  description,
}) => {
  const {
    getItemQuantity,
    incrementCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const itemQuantity: number = getItemQuantity(id);

  return (
    <Card>
      <Card.Img
        variant="top"
        src={image}
        className={styles.product_card_image}
      />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center">
          <div>{title.slice(0, 10)}</div>
          <Badge bg="dark" className="rounded-pill">
            {FormatCurrency({ price })}
          </Badge>
        </Card.Title>
        <Card.Text>{description.slice(0, 50)}</Card.Text>
        <div>
          {itemQuantity == 0 ? (
            <Button
              variant="primary"
              className="w-100"
              onClick={() => incrementCartQuantity(id)}>
              Add To Cart
            </Button>
          ) : (
            <div>
              <div
                style={{ gap: "20px" }}
                className="d-flex align-items-center justify-content-center">
                <Button
                  variant="primary"
                  onClick={() => incrementCartQuantity(id)}>
                  +
                </Button>
                {itemQuantity} in cart
                <Button
                  variant="primary"
                  onClick={() => decreaseCartQuantity(id)}>
                  -
                </Button>
              </div>

              <div className="d-flex justify-content-center mt-3">
                <Button variant="danger" onClick={() => removeFromCart(id)}>
                  Remove
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
