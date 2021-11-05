const { Schema } = require("mongoose");

const reactionSchema = new Schema({
  id: {
    type: Number,
  },
  user_id: {
    type: Number,
    references: {
      model: "user",
      key: "id",
    },
  },
  post_id: {
    type: Number,
    references: {
      model: "post",
      key: "id",
    },
  },
});

const Reaction = mongoose.model('Reaction', reactionSchema)