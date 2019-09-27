var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    first_name: {type: String, required: [true, 'First name please'], minlength: [1,'Please input your first name']},
    last_name: {type: String, required: [true, 'Last name please'], minlength: [1,'Please input your last name']},
    email: {type: String, required: [true, "What's your email"], minlength: [5, 'Please input your email'], unique: [true, "Email address already in use"]},
    password: {type: String, required:[true, 'Please input a password']},
    phone: {type: String, required: [true, "Please input a phone number, digits only"], minlength: [9, "Please include area code"], unique: [true, "Phone number already attributed to someone else"]}
}, {timestamps: true}
);

mongoose.model('User', UserSchema);