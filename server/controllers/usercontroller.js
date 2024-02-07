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

  // addClassmates
  async addClassmate(req, res) {
    const newClassamte = await User.findByIdAndUpdate(
      {_id: req.params.userId},
      {$addToSet:{classmates:req.params.classmateId}}
    )
    res.json(newClassmate)
  },


  //removeClassmates

  async removeClassmate(req,res) {
    const removeClassmate = await User.findByIdAndUpdate(
      {_id: req.params.userId},
      {$pull:{classmates:req.params.classmateId}}
    )
    if(!removeFriend) {return res.status(404).json({message:"Friend not found"})}
    res.json({message: "Friend Removed"})
  },


}











module.exports = userController