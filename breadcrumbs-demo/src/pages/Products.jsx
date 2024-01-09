import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);

  return (
    <>
      <div className="heading">
        <h1>Products</h1>
      </div>
      <div className="products">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default Products;
