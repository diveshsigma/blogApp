const express = require("express");
const protectRoute = require("../protect/protectRoute");
const { getAll, getOne, createPost, editPost, deletePost } = require("../controllers/postController")



const router = express.Router()


router.get("/", getAll);
router.get("/:slug", getOne);
router.post("/create", createPost);
router.patch("/edit/:id", editPost);
router.delete("/delete/:id", deletePost);


module.exports = router