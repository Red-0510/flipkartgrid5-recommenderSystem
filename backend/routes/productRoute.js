import express from "express"
import { addProduct , updateProduct} from "../controllers/productController.js"


const router = express.Router()

// router.get("/addproduct",addProduct);

 router.route("/")
  .patch(updateProduct)
   .post(addProduct)
export default router