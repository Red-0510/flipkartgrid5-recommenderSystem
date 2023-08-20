import express from "express"
import { addProduct , getHomeProduct, itemItemRecommendation, searchResults, updateProduct} from "../controllers/productController.js"
import { userAuth } from "../utils/auth.js"


const router = express.Router()

// router.get("/addproduct",addProduct);

 router.route("/")
  .patch(updateProduct)
   .post(addProduct)

router.route("/home")
   .get(getHomeProduct)

router.route("/results/:searchText")
   .get(searchResults)

router.route("/singleproduct/:productId")
   .get(itemItemRecommendation)
export default router