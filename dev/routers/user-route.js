// routes.js
const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addClassmate,
  removeClassmate,
} = require('../../controllers/usercontroller');

router.route('/').get(getUsers).post(createUser)

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser)

router.route('/:userId/classmates/:classmateId').post(addClassmate).delete(removeClassmate)

module.exports = router;

