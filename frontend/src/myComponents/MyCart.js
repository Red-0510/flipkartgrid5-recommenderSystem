import { useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Rating, Typography } from '@mui/material';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SoftBox from 'components/SoftBox';
import { useSelector } from 'react-redux';
import MyCard from './MyCard';
import { getCartProducts } from 'myServices/authService';
import { AddShoppingCart } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { toast } from 'react-toastify';

export default function MyCart() {
  const itemIds = useSelector(state => state.auth.user.cart);

  var [value, setValue] = useState(0)
  var [num, setNum] = useState(1)
  const [itemData, setItemData] = useState([]);

  // useEffect(async () => {
  //   // console.log("Here")
  //   async function fetch(){
  //   try {
  //       const result = await getCartProducts(itemIds);
  //       setItemData(result);
  //     } catch (error) {
  //       toast.error(error)
  //     }
  //   }
  //   fetch()
  // }, [])
  useEffect(async () => {
    try {
      const result = await getCartProducts(itemIds);
      setItemData(result);
    } catch (error) {
      toast.error(error);
    }
  }, []);

  const handleProductClick = (id)=>{
    console.log(id)
    navigate(`/singleproduct/${id}`)
  }

  // const handleCartClick = (id)=>{

  // }

  function truncateDescription(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength - 3) + "...";
    }
  }

  const products = itemData.map((product, index) => (
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
        onClick={()=>handleProductClick(product._id)}
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
        {/* <IconButton aria-label="cart" title="Add to Cart" onClick={()=>handleCartClick(product._id)}>
          <AddShoppingCart />
        </IconButton> */}
      </CardActions>
    </Card>
  ))

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "2rem auto", height: "auto", overflowY: "hidden" }}>

      <ImageList cols={1} sx={{ width: "30%" }}>
        { products}
      </ImageList>
    </div>
    //     <ImageListItem key={item.img}>
    //       <img
    //         src={`${item.image}?w=248&fit=crop&auto=format`}
    //         srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
    //         alt={item.name}
    //         loading="lazy"
    //         height="auto"
    //       />
    //       <ImageListItemBar
    //         title={item.name}
    //         subtitle={<span>company: {item.company}</span>}
    //         position="below"
    //       />
    //       <Rating
    //         name="simple-controlled"
    //         value={Math.floor(item.rating)}
    //         // onClickCapture={(event, newValue) => {
    //         //     setValue(newValue);
    //         // }} 
    //       />
    //       <SoftBox>
    //       <IconButton onClick={()=>{setNum(num==1?num=1:num--)}}><RemoveOutlinedIcon style={{display:"inline"}}/></IconButton>
    //         <p style={{display:"inline"}}>{num}</p>
    //       <IconButton onClick={()=>{setNum(num++)}} ><AddOutlinedIcon style={{display:"inline"}}/> </IconButton> 
    //         </SoftBox>       
    //       <Button variant="contained" color="success">
    //         BUY
    //       </Button>
    //     </ImageListItem>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];