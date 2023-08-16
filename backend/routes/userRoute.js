import express from "express"
import { addToCart, changePassword, createAdmin, forgotPassword, getUser, loginUser, logoutUser, registerUser, resetPassword, updateCart } from "../controllers/userController.js"
import { adminAuth, userAuth } from "../utils/auth.js"


const router = express.Router()

router.post("/register",registerUser);

router.route("/cart")
        .post(userAuth,addToCart)
         .patch(userAuth,updateCart)

// router.route("/addToCart",addToCart).get(userAuth,getUser);

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
router.route("/admin")
    .post(adminAuth,createAdmin)

export default router
