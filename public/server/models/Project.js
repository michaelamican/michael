var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name of project"], minlength: [1, "Please input project name"]},
    gitslug: {type: String},
    exturl: {type: String, required: [true, "External url"], minlength: [1, "Please include an external URL. If not hosted externally, link to github."], unique: [true, "External URL already in use"]},
    desc: {type: String, required: [true, "Please enter a description"], minlength: [1, "Please enter a description"]},
    com: {type: Boolean, required: [true, "Please enter whether this project is completed"]},
    img: {type: String, required: [true, "Please input an image name"]},
    rank: {type:Number, required:[true, "Please rank this project"], unique: true}
}, {timestamps: true}
);

mongoose.model('Project', ProjectSchema);