import React, { useContext } from "react";
import { Cart } from "../context/Context";
import { ListGroup } from "react-bootstrap";
const CarT = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(Cart);
  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod)=>(
            ///cart image
            <span>{prod.name}</span>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
            
      </div>
    </div>
  );
};

export default CarT;
