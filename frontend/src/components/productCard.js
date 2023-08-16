import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductCard({ product }) {
  return (
    <Card>
      <CardMedia component="img" alt={product.name} height="150" image={product.imageUrl} />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          Price: {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button startIcon={<ShoppingCartIcon />} variant="outlined">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
