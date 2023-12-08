import { Col, Row } from "react-bootstrap";
import { productTypes } from "../../types/productsTypes";
import ProductCard from "./productCard";
import React from "react";

type ProductsListProps = {
  products: productTypes[];
};

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  const productsList = products.map((product: productTypes) => (
    <Col key={product.id} xs={4} lg={3} className="mt-3">
      <ProductCard {...product} />
    </Col>
  ));

  return <Row>{productsList}</Row>;
};

export default ProductsList;
