import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({}) => {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`).then((res) => {
      fetch(res.url)
        .then((res) => {
          return res.json();
        })
        .then((res) => setProduct(res));
    });
  }, []);

  return (
    <>
      <div className="heading">
        <h1>Product Details</h1>
      </div>
      <div className="products">
        <Card
          sx={{
            width: 345,
            height: "100%",
            backgroundColor: "lightgray",
            marginLeft: "20rem",
          }}
        >
          <CardMedia
            component="img"
            sx={{ height: 140 }}
            image={product.thumbnail}
            title={product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">${product.price}</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default ProductDetails;
