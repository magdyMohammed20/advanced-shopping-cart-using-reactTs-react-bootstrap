import { ReactElement } from "react";
import Spinner from "react-bootstrap/Spinner";

function Loader(): ReactElement {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default Loader;
