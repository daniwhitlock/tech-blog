const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

//api/users
router.use('/users', userRoutes);
//api/posts
router.use('/posts', postRoutes);
//api/comments
router.use('/comments', commentRoutes);

module.exports = router;

//second layer api routes, so technically all start /api/users, posts, comments