import { useQuery } from "react-query";
import ProductsList from "../../components/products/productsList";
import Loader from "../../components/loader/Loader";
import styles from "./style.module.css";
import { useShoppingCart } from "../../context/shoppingCartContext";
import { Container } from "react-bootstrap";
const Store = () => {
  const { setProductsData } = useShoppingCart();

  const { isLoading, error, data } = useQuery(
    "products",
    () => fetch("https://fakestoreapi.com/products/").then((res) => res.json()),
    {
      staleTime: 7000,
    }
  );

  if (isLoading)
    return (
      <div className={styles.loader_container}>
        <Loader />
      </div>
    );

  if (error) {
    console.log(error);
  }

  setProductsData(data);
  return (
    <div>
      <Container className="pt-2">
        <h2 className="mt-5">Store</h2>
        <ProductsList products={data} />
      </Container>
    </div>
  );
};

export default Store;
