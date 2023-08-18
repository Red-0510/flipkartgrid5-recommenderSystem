import Product from "../models/Product.js";

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
      const foundProduct = [
        {
          img:"https://www.google.com/logos/doodles/2023/india-independence-day-2023-6753651837110072-l.webp",
          title:"apple ipad" ,
          desc:"Product of the day in $50000"
        },
        {
          img:"https://www.google.com/logos/doodles/2023/india-independence-day-2023-6753651837110072-l.webp",
          title:"apple ipad" ,
          desc:"Product of the day in $50000"
        },
        {
          img:"https://www.google.com/logos/doodles/2023/india-independence-day-2023-6753651837110072-l.webp",
          title:"apple ipad" ,
          desc:"Product of the day in $50000"
        },
        {
          img:"https://www.google.com/logos/doodles/2023/india-independence-day-2023-6753651837110072-l.webp",
          title:"apple ipad" ,
          desc:"Product of the day in $50000"
        },
        {
          img:"https://www.google.com/logos/doodles/2023/india-independence-day-2023-6753651837110072-l.webp",
          title:"apple ipad" ,
          desc:"Product of the day in $50000"
        },
        {
          img:"https://www.google.com/logos/doodles/2023/india-independence-day-2023-6753651837110072-l.webp",
          title:"apple ipad" ,
          desc:"Product of the day in $50000"
        },
        {
          img:"https://www.google.com/logos/doodles/2023/india-independence-day-2023-6753651837110072-l.webp",
          title:"apple ipad" ,
          desc:"Product of the day in $50000"
        },
        {
          img:"https://www.google.com/logos/doodles/2023/india-independence-day-2023-6753651837110072-l.webp",
          title:"apple ipad" ,
          desc:"Product of the day in $50000"
        },
        {
          img:"https://www.google.com/logos/doodles/2023/india-independence-day-2023-6753651837110072-l.webp",
          title:"apple ipad" ,
          desc:"Product of the day in $50000"
        },
        {
          img:"https://www.google.com/logos/doodles/2023/india-independence-day-2023-6753651837110072-l.webp",
          title:"apple ipad" ,
          desc:"Product of the day in $50000"
        },
      ]
      // console.log(foundProduct);
      if(!foundProduct){
        res.status(404)
        throw new Error("product not found");
      }
      console.log(foundProduct[0])
      res.status(200).json({
        success:true,
        message:"Product fetched successfully",
        data:{userRecommendations:foundProduct,
          locationRecommendations:foundProduct,
          salesRecommendations:foundProduct,
          userHistory:foundProduct,
          ageRecommendations:foundProduct},
      })
    }
    catch (err) {
      next(err)
    }
}

 export const itemItemRecommendation = async (req,res,next)=>{
    try {
      const { productId } = req.params;
      const recommendations = await Product.find({}).limit(10);
      if(!recommendations){
        res.status(407);
        throw new Error("Network Error");
      }
      res.status(201).json({
        success:true,
        message:"products recommended successfully",
        data:{product:recommendations[0],similarProducts:recommendations,associableProducts:recommendations},
      })
    } catch (err) {
      next(err);
    }
 }