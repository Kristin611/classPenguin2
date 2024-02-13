const { Blog, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    blog: async () => {
      return Blog.find().sort({ createdAt: -1 });
    },

    oneBlog: async (parent, { blogId }) => {
      return Blog.findOne({ _id: blogId });
    },
    user: async () => {
      return User.find();
    },
    oneUser: async (parent, {userId}) => {
      return User.findOne({ _id: userId})
    },
    //by adding context to query, we can retreive the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findeOne({ _id: context.user._id})
      }
      throw AuthenticationError;
    }
  },

  Mutation: {
    addBlog: async (parent, { blogContent, blogAuthor }) => {
      return Blog.create({ blogContent, blogAuthor });
    },
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { username, email, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw AuthenticationError;
      }

      const userEmail = await User.findOne({email});
      if (!userEmail) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
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