import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, title, description, thumbnail, price } = product;

  return (
    <Link to={`/products/${id}`}>
      <div>
        <Card sx={{ width: 345, height: "100%", backgroundColor: "lightgray" }}>
          <CardMedia
            component="img"
            sx={{ height: 140 }}
            image={thumbnail}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              sx={{ backgroundColor: "darkblue", color: "white" }}
            >
              ${price}
            </Button>
          </CardActions>
        </Card>
      </div>
    </Link>
  );
};

export default Product;
