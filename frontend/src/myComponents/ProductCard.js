import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AddShoppingCart } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SoftBox from 'components/SoftBox';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard() {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();

  const similarProductsCards = useSelector(state => state.product.similarProducts);
  const associableProductsCards = useSelector(state => state.product.associableProducts);
  const singleProductsCards = useSelector(state => state.product.product);

  function truncateDescription(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength - 3) + "...";
    }
  }

  const similarProductsCardsComps = similarProductsCards.map((product, index) => (
    <Card sx={{ height: "80%", width: "20rem", margin: "1rem" }} key={index}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={product.name}
      />
      <CardMedia
        component="img"
        height="194"
        image={product.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {truncateDescription(product.description, 50)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" title="Add to Favourite">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" title="Share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="cart" title="Add to Cart" onClick={() => { navigate("/cart") }}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  ))

  const associableProductsCardsComps = associableProductsCards.map((product, index) => (
    <Card sx={{ height: "80%", width: "20rem", margin: "1rem" }} key={index}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={product.name}
      />
      <CardMedia
        component="img"
        height="194"
        image={product.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {truncateDescription(product.description, 50)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" title="Add to Favourite">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" title="Share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="cart" title="Add to Cart" onClick={() => { navigate("/cart") }}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  ))

  return (
    <SoftBox>
      <SoftBox sx={{ display: "flex", alignItem: "center", justifyContent: "center" }}>
        <Card sx={{ height: "80%", width: "30%", margin: "1rem" }}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={singleProductsCards.name}
          />
          <CardMedia
            component="img"
            height="194"
            image={singleProductsCards.image}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {truncateDescription(singleProductsCards.description, 50)}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" title="Add to Favourite">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share" title="Share">
              <ShareIcon />
            </IconButton>
            <IconButton aria-label="cart" title="Add to Cart" onClick={() => { navigate("/cart") }}>
              <AddShoppingCart />
            </IconButton>
          </CardActions>
        </Card>
      </SoftBox>


      <SoftBox>
        <h2>Similar Products</h2>
        <ScrollMenu>
          {similarProductsCardsComps}
        </ScrollMenu>
      </SoftBox>

            <br />
            <hr />
            <br />

      <SoftBox>
        <h2>Frequently Brought together</h2>
        <ScrollMenu>
          {associableProductsCardsComps}
        </ScrollMenu>
      </SoftBox>

    </SoftBox>
  );
}