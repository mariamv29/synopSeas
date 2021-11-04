const { Schema, model} = require ('mongoose');

const UserSchema = new Schema ({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required:  String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
})

//create User model using the Userschema
const User = model('User', UserSchema);

//export the User model 
module.exports = User; 