// import DefaultNavbar from 'examples/Navbars/DefaultNavbar';
import React from 'react';
import ProductCard from './ProductCard';
import SoftBox from 'components/SoftBox';


// const SingleProduct = () => {
//   return (
//     <div className="product-page">
//         <DefaultNavbar />

//         <div style={{marginTop:'10px'}}>  
//       <div className="product-image">
//         <img src="https://www.google.com/logos/doodles/2023/india-independence-day-2023-6753651837110072-l.webp" alt="hello" />
//       </div>
//       <div className="product-details">
//         <h2>HP TELEVESION</h2>
//         <p>CHIPEST TELEVISION</p>
//         <p>0$</p>
//         </div>
//         {/* You can add more product details here */}
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;


function SingleProduct() {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",margin:"2rem auto"}}>
      <ProductCard />
    </div>
  );
}

export default SingleProduct;