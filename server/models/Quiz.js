const {Schema, model} = require("mongoose")

const Quiz = new Schema({
  question: {type: String, required: true},
  rightAnswerId: {type: Number, required: true},
  answers: [{
    text: {type: String, required: true},
    letter: {type: String, required: true},
    id: {type: Number, required: true},
  }],
})

module.exports = model('Quiz', Quiz)