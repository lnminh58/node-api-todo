var mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Number,
    default: null,
  },
  completedAt: {
    type: Number,
    default: null,
  },
});

TodoSchema.statics.findByUserId = function (userId) {
  const Todo = this;

  return Todo.find({ userId })
}


var Todo = mongoose.model('Todo', TodoSchema);

module.exports = { Todo };
