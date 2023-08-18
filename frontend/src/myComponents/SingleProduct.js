// import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import SoftBox from 'components/SoftBox';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getSimilarAndAssociableProduct } from 'myServices/authService';
import { toast } from 'react-toastify';
import { ConstructionOutlined } from '@mui/icons-material';


function SingleProduct() {

  const { id } = useParams();
  // console.log(id)
  const dispatch = useDispatch()
  // const cards = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1]

  // useEffect(async function(){
  //   const response=await getSimilarAndAssociableProduct(id,dispatch);
  //   console.log(response)
  // },[])
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getSimilarAndAssociableProduct(id, dispatch);
        // console.log(response);
      }
      catch (err) {
        toast.error("product not found")
      }
    }

    fetchData();
  }, [])

  return (
    <SoftBox style={{ margin: "2rem auto" }}>
      <ProductCard />
    </SoftBox>
  );
}

export default SingleProduct;