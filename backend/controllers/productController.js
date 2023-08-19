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
      let {data}= await getHomeProductsModel({"userId":"64df99c726ae34e9b5e8f4fe"})
      // console.log(foundProduct);
      data=[
        '64df956837c971d3ecb0a4a0',
        '64df95dd37c971d3ecb0ca7e',
        '64df95e737c971d3ecb0ce08',
        '64df959b37c971d3ecb0b47a',
        '64df955637c971d3ecb09e98',
        '64df963437c971d3ecb0e770',
        '64df95e837c971d3ecb0ce6c',
        '64df957037c971d3ecb0a7b2',
        '64df95d137c971d3ecb0c5fa',
        '64df959c37c971d3ecb0b4bc',
        '64df956137c971d3ecb0a268',
        '64df955f37c971d3ecb0a1c8',
        '64df955e37c971d3ecb0a138',
        '64df95df37c971d3ecb0cb2c',
        '64df957137c971d3ecb0a81c'
      ]
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