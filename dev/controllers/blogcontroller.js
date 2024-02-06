const { User, Blog } = require('../models');

const  blogController = {

  // GET blogs
  async getBlogs(req, res) {
    const blogs = await Blog.find();
    res.json(blogs);
  },
  async getSingleBlog(req, res) {
    const singleBlog = await Blog.findOne({
      _id: req.params.blogId
    })
      .select('-__v')
    // .populate('friends').populate('thoughts')
    res.json(singleBlog)
  },


  async createBlogs(req, res) {
    try {
      const newBlog = await Blog.create(req.body);
      res.json(newBlog);
    } catch (error) {
      // Handle any errors that occurred during creation
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async updateBlog(req, res) {
    const modifyBlog = await Blog.findOneAndUpdate(
      { _id: req.params.blogId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
    if(!modifyBlog) {return res.status(404).json({message:"Thought not found"})}
    res.json({"message":"Blog Updated"})
  },

  async deleteBlog(req,res) {
    const removeBlog = await Blog.findOneAndDelete(
      {_id: req.params.thoughtId}
    )
    if(!removeBlog) {return res.status(404).json({message:"Blog not found"})}
    res.json({message: "Blog deleted"})
  },

// createReaction
async createComment(req, res) {
  const updatedBlog = await Blog.findOneAndUpdate(
    { _id: req.params.blogId },
    { $addToSet: { comments:  req.body } },
    { new: true } // Return the updated document
  );
  res.json(updatedBlog);
},


// removeReaction
async removeComment(req, res) {
  try{
    const removedComment = await Blog.findOneAndUpdate(
      { _id: req.params.blogId },
      { $pull: { comments: { commentId: req.params.commentId } } },
      { new: true } // Return the updated document
    );
    if (!removedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.json({ message: "Comment Removed" });
  } catch(error){
    console.log(error)
    res.status(500).json(error)
  }
 
},


  

}



  

  
 

  


module.exports = blogController;







