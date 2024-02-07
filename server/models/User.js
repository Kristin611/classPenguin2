const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique:true,
    },
    email: {
      type: String,
      required: true,
      unique:true,
    },
    blogs: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Blog',
      },
    ],
    classmates: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('classmateCount').get(function(){
    return this.classmates.length
})

const User = model('User', userSchema);

module.exports = User;
