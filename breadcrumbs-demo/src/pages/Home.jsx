import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import Button from "@mui/material/Button";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        const products = res.products.slice(0, 6);
        setTrendingProducts(products);
      });
  }, []);

  return (
    <>
      <div className="heading">
        <h1>Home</h1>
        <h2>Trending Products</h2>
      </div>
      <div className="products">
        {trendingProducts.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
      <div className="products-button">
        <Button variant="contained" color="secondary">
          <Link to="/products">
            <h3 style={{ color: "black" }}>Go to All Produts</h3>
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Home;
