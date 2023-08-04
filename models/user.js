const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    googleId: {
        type: String,
        required:true
    },
    email: String,
    profile_img: String,
}, {
    timestamps: true
});

const cloudinarySchema = new Schema({
    name: String,
    avatar: String,
    cloudinary_id: String
});

module.exports = mongoose.model('User', userSchema);
module.exports = mongoose.model('Cloudinary', cloudinarySchema);