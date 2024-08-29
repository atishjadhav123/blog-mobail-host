const { getAllBlogs, updateBlogs, deleteBlogs, addlBlogs } = require("../controller/blog.controller")

const router = require("express").Router()

router
    .get("/", getAllBlogs)
    .post("/addblog", addlBlogs)
    .put("/update/:id", updateBlogs)
    .delete("/delete/:id", deleteBlogs)

module.exports = router