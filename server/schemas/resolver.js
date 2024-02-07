const { Blog } = require('../models');

const resolvers = {
  Query: {
    blogs: async () => {
      return Blog.find().sort({ createdAt: -1 });
    },

    blog: async (parent, { blogId }) => {
      return Blog.findOne({ _id: blogId });
    },
  },

  Mutation: {
    addBlog: async (parent, { blogText, blogAuthor }) => {
      return Blog.create({ blogText, blogAuthor });
    },
    addComment: async (parent, { blogId, commentBody }) => {
      return Blog.findOneAndUpdate(
        { _id: blogId },
        {
          $addToSet: { comments: { commentBody } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeBlog: async (parent, { blogId }) => {
      return Blog.findOneAndDelete({ _id: blogId });
    },
    removeComment: async (parent, { blogId, commentId }) => {
      return Blog.findOneAndUpdate(
        { _id: blogId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
