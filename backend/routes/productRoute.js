import express from "express"
import { addProduct , getHomeProduct, itemItemRecommendation, updateProduct} from "../controllers/productController.js"
import { userAuth } from "../utils/auth.js"


const router = express.Router()

// router.get("/addproduct",addProduct);

 router.route("/")
  .patch(updateProduct)
   .post(addProduct)

router.route("/home")
   .get(getHomeProduct)

router.route("/singleproduct/:productId")
   .get(itemItemRecommendation)
export default router