import axios from "axios";

const fastAPIurl=`https://b18d-34-29-10-228.ngrok.io/api`
export const getHomeProductsModel = async (userId) => {
    try {
      const response = await axios.post(
        `${fastAPIurl}/home`,
        userId
      );
      const data = response.data
      console.log(data)
      if (data==[]) {
        throw new Error(response)
      }
      return {
        success:true,
        message:"success",
        data:data
      }
  
    } catch (error) {
        return {
            success:false,
            message:error,
            data:[]
        }
    }
  };

  export const getSingleProductModel = async (productId) => {
    try {
      const response = await axios.post(
        `${fastAPIurl}/singleproduct/${productId}`,
        userId
      );
      const data = response.data
      console.log(data)
      if (data==[]) {
        throw new Error(response)
      }
      return {
        success:true,
        message:"success",
        data:data
      }
  
    } catch (error) {
        return {
            success:false,
            message:error,
            data:[]
        }
    }
  };