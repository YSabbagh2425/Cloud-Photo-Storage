const Photo = require('../models/photo');

module.exports = {
    create,
    delete: deleteContent
};

function deleteContent (request, response) {
    Content.findOne({
    'contents._id': request.params.id,
    'contents.user': request.user._id
}).then(function(photo) {
        if (!photo) return response.redirect('/photos');
        photo.contents.remove(request.params.id);
        photo.save().then(function () {
            response.redirect(`/photos/${photo._id}`);
        }).catch(function (err) {
            return next(err);
        });
    });
};

async function create (request, response) {
    const photo = await Photo.findById(request.params.id);
    photo.contents.push(request.body)
    try {
        await photo.save()
    } catch (err) {
        console.log(err)
    }
    response.redirect(`/photos/${photo._id}`);
};