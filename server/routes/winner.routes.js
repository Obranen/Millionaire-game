const Router = require("express")
const router = new Router()
const User = require("../models/User")
const Losing = require("../models/Losing")
const winMiddleware = require('../middleware/win.middleware')
const authMiddleware = require('../middleware/auth.middleware')

router.get('/', authMiddleware, async (req, res) => {
  try {
    let user = await User.find({}, 'winner nickname').select('-_id')
    let losing = await Losing.find({owner: req.user.id}, 'money date')
    return res.json({
      user, losing
    })
  } catch (e) {
    res.send({message: "Error"})
  }
})

router.delete('/delete/:id', (req, res) => {
  const id = req.params.id
  Losing.findByIdAndDelete(id, row =>{res.send(row)})
})

router.put('/win', winMiddleware, async (req, res) => {
  try {
    await User.findOneAndUpdate({_id: req.user.id}, {$inc : {"winner" : 1}}, {new: true})
    const {money} = req.body
    const losing = new Losing({money, owner: req.user.id})
    await losing.save()
    res.status(201).json({losing})
  } catch (e) {
    res.send({message: "Error WIN"})
  }
})

router.post('/lost', winMiddleware, async (req, res) => {
  try {
    const {money} = req.body
    const losing = new Losing({money, owner: req.user.id})
    await losing.save()
    res.status(201).json({losing})
  } catch (e) {
    res.send({message: "Error LOST"})
  }
})


module.exports = router
