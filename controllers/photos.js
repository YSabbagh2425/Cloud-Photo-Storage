const Photo = require('../models/photo');

module.exports = {
    new: newPhoto,
    create,
    index,
    show,
    delete: deletePhoto
};

async function show (request, response) {
    const photo = await Photo.findById(request.params.id);
    response.render('photos/show', { title: 'Photo Detail', photo});
};

function newPhoto(request, response) {
    response.render('photos/new', { errorMsg: '' });
};

function deletePhoto (request, response) {
    Photo.findOne({
    'photos._id': request.params.id,
    'photos.user': request.user._id
}).then(function(photo) {
        if (photo) return response.redirect('/');
        photo.remove(request.params.id);
        photo.save().then(function () {
            response.redirect(`/photos/${photo._id}`);
        }).catch(function (err) {
            return next(err);
        });
    });
};

async function create(request, response) {
    request.body.user = request.user._id;
    request.body.userName = request.user.name;
    request.body.userAvatar = request.user.avatar;
    try {
        await Photo.create(request.body);
        response.redirect('/photos');
    }   catch (err) {
        response.render('photos/new', {errorMsg: err.message});
    }
};

async function index (request, response) {
    const photos = await Photo.find({});
    response.render('photos/index', { title: 'All Photos', photos });
};