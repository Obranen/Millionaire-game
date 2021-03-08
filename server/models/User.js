const {Schema, model, Types} = require("mongoose")

const User = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  nickname: {type: String, required: true},
  winner: {type: Number, default: 0},
  losers: [{type: Types.ObjectId, ref: 'Losing'}],
})

module.exports = model('User', User)
