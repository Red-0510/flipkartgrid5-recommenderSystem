import express from "express"
import { addToCart, buyProduct, changePassword, forgotPassword, getProductsFromIds, getUser, loginUser, logoutUser, registerUser, resetPassword, updateCart, updatedPurchase } from "../controllers/userController.js"
import { adminAuth, userAuth } from "../utils/auth.js"


const router = express.Router()

router.post("/register",registerUser);

router.route("/cart")
        .post(userAuth,addToCart)
         .patch(userAuth,updateCart)

router.post('/product',userAuth,getProductsFromIds)

router.route("/buy")
        .get(userAuth,updatedPurchase)
        .post(userAuth,buyProduct)

router.route("/login")
    .post(loginUser)
    .get(userAuth, getUser)

router.get("/logout",userAuth,logoutUser)

// password routes
router.route("/password")
    .patch(userAuth, changePassword)
    .post(forgotPassword)

router.put("/resetpassword/:resetToken",resetPassword)


//admin routes
// router.route("/admin")
//     .post(adminAuth,createAdmin)

export default router
