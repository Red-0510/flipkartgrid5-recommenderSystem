import React, { useEffect, useState } from 'react'
import MyScrollMenu from './MyScrollMenu'
import SoftBox from 'components/SoftBox'
import Footer from 'layouts/authentication/components/Footer'
import { getHomeProduct } from 'myServices/authService';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
// import Header from 'layouts/profile/components/Header'


function MyDashboard() {
    const dispatch = useDispatch()
    // const cards = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1]

    // useEffect(async function (){
    //   const response=await getHomeProduct({},dispatch);
    //   console.log(response)
    // },[])
    const [response, setResponse] = useState(null)
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await getHomeProduct({}, dispatch);
        } catch (err) {
          toast.error("Error fetching the products")
        }
      }
      
      // console.log(response);
      fetchData();
    }, []);
    
  return (
        <SoftBox>
            <MyScrollMenu />
            <Footer />
        </SoftBox>
      )
}
  
export default MyDashboard