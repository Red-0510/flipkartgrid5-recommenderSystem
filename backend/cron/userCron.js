import mongoose from "mongoose";
import faker from "faker"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User, { ageEnum, stateEnum } from "../models/User.js";
import Product, { categoryEnum } from "../models/Product.js";
import Transaction from "../models/Transaction.js";
import Interaction from "../models/Interaction.js";

// const stateEnum=["Gujarat","Rajasthan","Maharashtra","Madhya Pradesh","Karnataka","Goa","Punjab","Tamil Nadu"]
// const ageEnum=["Child","Teenager","Young","Adult","Old"]
// const categoryEnum = ["laptop","mobile","house-hold","clothes","footwear","beauty-products","grocery","TV","decorative"]

// Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/flipkartDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const numU = 10000;
const numP = 10000;

// Function to generate fake users
const generateUsers = async () => {
  const users = await User.find();
  // let count=0;
  // for (let i = 0; i < numU; i++) {
  //   const user =await User.create({
  //       name: faker.name.findName(),
  //       email: faker.internet.email() + String(Date.now()),
  //       location: faker.random.arrayElement(stateEnum),
  //       age: faker.random.arrayElement(ageEnum),
  //       password: "user1234"
  //   });
  //   count++;
  //   // users.push(user);
  // }
  // console.log(count)
  return users;
};

// Function to generate fake products
const generateProducts = async () => {
  const products = await Product.find();
  // let count=0;
  // for (let i = 0; i < numP; i++) {
  //   const product = await Product.create({
  //       name: faker.commerce.productName(),
  //       category: faker.random.arrayElement(categoryEnum),
  //       company: faker.company.companyName(),
  //       rating: faker.random.number({ min: 1, max: 5 }),
  //       description: faker.lorem.paragraph(),
  //       price: faker.random.number({ min: 10, max: 1000 }),
  //       image: faker.image.imageUrl(),
  //     });
  //     // products.push(product);
  //     count++;
  //   }
  //   console.log(count);
  return products;
};

// Function to generate transactions based on user location
const generateTransactionsByLocation = async (users, products) => {
  let count=0;
  for (const location of stateEnum) {
    const usersInLocation = users.filter(user => user.location === location);
    const numTransactionsPerLocation = faker.random.number({ min: 800, max: 1500 });
    if(usersInLocation.length <10) continue;
    for (let i = 0; i < numTransactionsPerLocation; i++) {
      const user = usersInLocation[Math.floor(Math.random() * usersInLocation.length)];
      let numProducts = faker.random.number({ min: 1, max: 5 });
      const purchasedProducts = [];
      const selectedProducts = new Set(); // To store selected product IDs
      
      const referenceProduct = products[Math.floor(Math.random() * products.length)];
      const similarProducts = products.filter(product =>
        product.category == referenceProduct.category
      );

      while (selectedProducts.size<numProducts) {
        const randomProduct = similarProducts[Math.floor(Math.random() * similarProducts.length)];
        selectedProducts.add(randomProduct._id);
      }
      // if (similarProducts.length === 0) {
      //   // If there are no similar products, choose the reference product
      //   selectedProducts.add(referenceProduct._id);
      // } else {
      //   // Select products with similar category
      //   while (numProducts--) {
      //     const randomProduct = similarProducts[Math.floor(Math.random() * similarProducts.length)];
      //     selectedProducts.add(randomProduct._id);
      //   }
      // }

      for (const productId of selectedProducts) {
        const quantity=faker.random.number({ min: 1, max: 8 });
        const time = faker.date.past();
        purchasedProducts.push({
          productId: productId,
          time,
          quantity,
        });
        const interaction = await Interaction.create({
          userId:user._id,
          productId,
          point:(quantity*100),
          time,
        })
      }

      const transaction = new Transaction({
        userId: user._id,
        products: purchasedProducts,
        time: faker.date.past(),
      });
      await transaction.save();
      count++;
      console.log(count)

      user.purchases.push({
        transactionId: transaction._id,
        time: transaction.time,
        products: purchasedProducts,
      });
      await user.save();
    }
  }
};

// Function to generate transactions based on user age
const generateTransactionsByAge = async (users, products) => {
  const ages = ageEnum;
  let count=0;
  for (const age of ages) {
    const usersInAgeGroup = users.filter(user => user.age === age);
    if(usersInAgeGroup.length <10) continue;
    const numTransactionsPerAgeGroup = faker.random.number({ min: 400, max: 1000 });
    for (let i = 0; i < numTransactionsPerAgeGroup; i++) {
      const user = usersInAgeGroup[Math.floor(Math.random() * usersInAgeGroup.length)];
      let numProducts = faker.random.number({ min: 1, max: 5 });
      const purchasedProducts = [];

      const selectedProducts = new Set(); // To store selected product IDs
      
      const referenceProduct = products[Math.floor(Math.random() * products.length)];
      const similarProducts = products.filter(product =>
        product.category == referenceProduct.category
      );

      while (selectedProducts.size<numProducts) {
        const randomProduct = similarProducts[Math.floor(Math.random() * similarProducts.length)];
        selectedProducts.add(randomProduct._id);
      }
      // if (similarProducts.length === 0) {
      //   // If there are no similar products, choose the reference product
      //   selectedProducts.add(referenceProduct._id);
      // } else {
      //   // Select products with similar category
        
      // }

      for (const productId of selectedProducts) {
        const quantity=faker.random.number({ min: 1, max: 8 });
        const time = faker.date.past();
        purchasedProducts.push({
          productId: productId,
          time,
          quantity,
        });
        const interaction = await Interaction.create({
          userId:user._id,
          productId,
          point:(quantity*100),
          time,
        })
      }

      const transaction = new Transaction({
        userId: user._id,
        products: purchasedProducts,
        time: faker.date.past(),
      });
      await transaction.save();
      count++;
      console.log(count)

      user.purchases.push({
        transactionId: transaction._id,
        time: transaction.time,
        products: purchasedProducts,
      });
      await user.save();
    }
  }
};

// Generate and save data
export const generateAndSaveData = async (req,res,next) => {
  try{
    const users=await generateUsers();
    const products=await generateProducts();
    
    // await generateTransactionsByLocation(users, products);
    await generateTransactionsByAge(users, products);

    // console.log("Data generation complete");
    res.status(200).json({
      success:true,
      message:"Data generation complete"
    })
  }catch(err){
    next(err);
  }
  
};

