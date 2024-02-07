// routes.js
const router = require('express').Router();
const {
  getBlogs,  getSingleBlog, createBlogs,   updateBlog,  deleteBlog,   createComment, removeComment
} = require('../../controllers/blogcontroller');

router.route('/').get(getBlogs)


router.route('/:blogId').get(getSingleBlog)

router.route('/').post(createBlogs)

router.route('/:blogId').put(updateBlog)

router.route('/:blogId').delete(deleteBlog)

router.route('/:blogId/comments').post(createComment);
router.route('/:blogId/comments/:commentId').delete(removeComment);


module.exports = router;