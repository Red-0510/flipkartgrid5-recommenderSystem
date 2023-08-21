import Product from "../models/Product.js";
import { getHomeProductsModel, getSingleProductModel } from "./axios.js";

export const addProduct = async (req, res, next) => {
  try {
    const { name, category, company, rating, description, price, image } =
      req.body;

    const product = await Product.create({
      name,
      category,
      company,
      rating,
      description,
      price,
      image,
    });

    res.status(201).json({
      success: true,
      message: "Image Added Successfully",
      data: product,
    });
  } catch (err) {
    next(err);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { _id, name, category, company, rating, description, price, image } =
      req.body;
    const pUpdate = await Product.findOneAndUpdate(
      { _id: _id },
      {
        $set: {
          name: name,
          category: category,
          company: company,
          rating :rating,
          description: description,
          price: price,
          image: image,
        },
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    if (pUpdate) {
      res.status(201).json({
        success: true,
        message: "Image updated Successfully",
        data: pUpdate,
      });
    }
  } catch (err) {
    next(err);
  }
};

export const getHomeProduct = async (req,res,next)=>{
    try {
      // const {productQuery} = req.body;
      // const foundProduct = await Product.find({category:"laptop"}).limit(10);
      const loggedIn=false;
      const token = req.cookies?.token;
        // console.log(token)
        let decoded=null;
        if(token){
          decoded = jwt.verify(String(token),process.env.ACCESS_TOKEN_SECRET)
        }
        
        if(token && decoded?.id){
          loggedIn=true;
        }
        const userId = (loggedIn) ? decoded.id : "64df99c726ae34e9b5e8f4fe"
      let {data}= await getHomeProductsModel({"userId":userId})
      // console.log(foundProduct);
      if(data==[]){
        res.status(404)
        throw new Error("product not found");
      }
      const userRecommendations= []
      for(const d of data){
        const p=await Product.findById(d)
        userRecommendations.push(p)
      }
      // console.log(foundProduct[0])
      res.status(200).json({
        success:true,
        message:"Product fetched successfully",
        data:{
          tryData:userRecommendations,
          userRecommendations,
          locationRecommendations:userRecommendations,
          salesRecommendations:userRecommendations,
          userHistory:userRecommendations,
          ageRecommendations:userRecommendations},
      })
    }
    catch (err) {
      next(err)
    }
}

 export const itemItemRecommendation = async (req,res,next)=>{
    try {
      const { productId } = req.params;
      let data= await getSingleProductModel(productId)
      const singleProduct = await Product.findById(productId);
      data=await Product.find({category:singleProduct.category}).limit(10)
      if(data==[]){
        res.status(404)
        throw new Error("product not found");
      }
      const similarProducts= []
      for(const d of data){
        const p=await Product.findById(d)
        similarProducts.push(p)
      }
      res.status(201).json({
        success:true,
        message:"products recommended successfully",
        data:{product:singleProduct,similarProducts,associableProducts:similarProducts},
      })
    } catch (err) {
      next(err);
    }
 }

 export const searchResults = async (req,res,next)=>{
  try {
    const {searchText}= req.params;
    // var dbo = db.db("flipkartDB");
    //  dbo.Product.createIndex({name:"text",description:"text"})
    const data = await Product.find({$or :[{category:new RegExp(searchText,'i')},{name:new RegExp(searchText,'i')},{company:new RegExp(searchText,'i')}]}).limit(10);
    if(!data){
      throw new Error("No Search Results");
    }
    // { username:new RegExp(sarch,'i') }
    res.status(201).json({
      success:true,
      message:"Search Successful",
      data:data
      
    });
    }
   catch (error) {
    next(error)
  }

 }