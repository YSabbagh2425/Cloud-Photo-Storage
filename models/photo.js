const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contentSchema = new Schema ({
    content: { type: String, required: true}
}, {
    timestamps: true
});

const photoSchema = new Schema ({
    title: String,
    desc: String,
    data: Buffer,
    contentType: String,
    contents: [contentSchema],
    user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
},
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Photo', photoSchema);
