// ObjectId() method for converting studentId string into an ObjectId for querying database
const { User, Blog } = require('../models');

const userController = {

  async getUsers(req, res) {
    const users = await User.find().select('-__v');
    res.json(users);
  },

  async getSingleUser(req, res) {
    const singleUser = await User.findOne({
      _id: req.params.userId
    })
      .select('-__v')
    // .populate('friends').populate('thoughts')
    res.json(singleUser)
  },

  async createUser(req, res) {
    const newUser = await User.create(req.body)
    res.json(newUser)
  },

  async updateUser(req, res) {
    const modifyUser = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
    if(!modifyUser) {return res.status(404).json({message:"user not found"})}
    res.json({"message": "User updated"})
  },

  async deleteUser(req,res) {
    const removeUser = await User.findOneAndDelete(
      {_id: req.params.userId}
    )
    if(!removeUser) {return res.status(404).json({message:"user not found"})}
    res.json({message: "user deleted"})
  },

  // addFriend
  async addFriend(req, res) {
    const newFriend = await User.findByIdAndUpdate(
      {_id: req.params.userId},
      {$addToSet:{friends:req.params.friendId}}
    )
    res.json(newFriend)
  },


  //removeFriend

  async removeFriend(req,res) {
    const removeFriend = await User.findByIdAndUpdate(
      {_id: req.params.userId},
      {$pull:{friends:req.params.friendId}}
    )
    if(!removeFriend) {return res.status(404).json({message:"Friend not found"})}
    res.json({message: "Friend Removed"})
  },


}











module.exports = userController