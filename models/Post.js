const { Schema } = require('mongoose');

const postSchema = new Schema(
    {
        title: {
            type: String, 
        },
        postText: {
            type: String,
        },
        name: {
            type: String,
        }
    }
)