const { Schema, model, Types } = require ('mongoose');
const dateFormat = require ('../utils/dateFormat');

const commentSchema = new Schema(
  {
      commentId:{
          type: Schema.Types.ObjectId,
          default: ()=> new Types.ObjectId()
      },
      commentBody: {
          type: String,
          required: true,
          maxlength:280,
      },
      createdAt: {
          type: Date,
          default: Date.now,
      },
      username: {
          type: String,
          required: true,
      },
  },
  {
      toJSON: {
          virtuals: true,
      },
      id: false,
  }
)


const blogSchema = new Schema(
  {
      blogContent: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 10000,
        trim: true,
      },
      blogAuthor: {
        type: String,
        required: false,
        trim: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
      comments:[commentSchema]
      },
      {
          toJSON: {
              virtuals: true,
          },
          id: false,
      }
);

blogSchema.virtual('commentCount').get(function () {
  return this.comments.length
})

const Blog = model('Blog', blogSchema);

module.exports = Blog;
