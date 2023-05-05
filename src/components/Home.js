import { useContext } from "react";
import { Cart } from "../context/Context";
import SingleProducts from "./singleProducts";
import Filters from "./Filters";
const Home = () => {
  const {
    state: { products },
  } = useContext(Cart);
  console.log(products);
  return (
    <div className="home">
      <Filters/>
      <div className="productContainer">
        {products.map((prod) => {
          return <SingleProducts prod={prod} key={prod.id}/>;
        })}
      </div>
    </div>
  );
};

export default Home;
