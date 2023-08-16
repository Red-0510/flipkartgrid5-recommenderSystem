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
      success: "true",
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
        success: "true",
        message: "Image updated Successfully",
        data: pUpdate,
      });
    }
  } catch (err) {
    next(err);
  }
};
