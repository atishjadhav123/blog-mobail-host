const asynchandler = require("express-async-handler")
const Blog = require("../module/Blog")
const { io } = require("../socket/socket")

exports.getAllBlogs = asynchandler(async (req, res) => {
    const result = await Blog.find()
    res.status(200).json({ message: "blog fetch success", result })
})
exports.addlBlogs = asynchandler(async (req, res) => {
    await Blog.create(req.body)
    console.log(req.body)
    const result = await Blog.find()
    io.emit("blog-create-responce", result)
    res.status(200).json({ message: "blog add success" })
})
exports.updateBlogs = asynchandler(async (req, res) => {
    const { id } = req.params
    await Blog.findByIdAndUpdate(id, req.body)
    const result = await Blog.find()
    io.emit("blog-create-responce", result)
    res.status(200).json({ message: "blog update success" })
})
exports.deleteBlogs = asynchandler(async (req, res) => {
    const { id } = req.params
    const result = await Blog.find()
    io.emit("blog-create-responce", result)
    await Blog.findOneAndDelete(id)
    res.status(200).json({ message: "blog delete success" })
})