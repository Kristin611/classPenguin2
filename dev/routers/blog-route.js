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
  createComment, removeComment
 } = require('../../controllers/blogcontroller');

router.route('/:blogId/comments').post(createComment);
router.route('/:blogId/comments/:commentId').delete(removeComment);


module.exports = router;