const {Schema, model, Types} = require("mongoose")

const Losing = new Schema({
  money: {type: Number},
  date: {type : Date, default: Date.now},
  owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Losing', Losing)