// Import all models

const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// create associations
User.hasMany(Post, {
    // onDelete deletes anything associated with that user, so posts, comments
    foreignKey: 'user_id', onDelete: "cascade"
});

Post.belongsTo(User, {
    foreignKey: 'user_id', onDelete: "cascade"

});

Comment.belongsTo(User, {
    foreignKey: 'user_id', onDelete: "cascade"
});

Post.hasMany(Comment, {
    foreignKey: 'post_id', onDelete: "cascade"
});

module.exports = { User, Post,  Comment };