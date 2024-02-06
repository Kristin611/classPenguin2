// routes.js
const router = require('express').Router();
const {
  getBlogs
} = require('../../controllers/blogcontroller');

router.route('/').get(getBlogs)

//const router = require('express').Router();
const {
  getSingleBlog
} = require('../../controllers/blogcontroller');

router.route('/:blogId').get(getSingleBlog)

//const router = require('express').Router();
const {
  createBlogs
} = require('../../controllers/blogcontroller');

router.route('/').post(createBlogs)


const {
  updateBlog
} = require('../../controllers/blogcontroller');

router.route('/:blogId').put(updateBlog)


const {
  deleteBlog
} = require('../../controllers/blogcontroller');

router.route('/:blogId').delete(deleteBlog)



const { 
  createComent, removeComment
 } = require('../../controllers/blogcontroller');

router.route('/:blogId/commentss').post(createComment);
router.route('/:blogId/commentss/:commentId').delete(removeComment);


module.exports = router;