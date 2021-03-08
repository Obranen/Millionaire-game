const Router = require("express")
const router = new Router()
const Quiz = require("../models/Quiz")
const {validationResult} = require("express-validator")

router.post('/create',
  async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({message: "isEmpty request", errors})
    }
    const {question, rightAnswerId, answers} = req.body
    const quiz = new Quiz({question, rightAnswerId, answers})
    await quiz.save()
    res.status(201).json({quiz})
  } catch (e) {
    res.send({message: "Error create"})
  }
})

router.get('/', async (req, res) => {
  try {
    let quiz = await Quiz.find({})
    return res.json({
      quiz
    })
  } catch (e) {
    res.send({message: "Error"})
  }
})

router.delete('/delete/:id', (req, res) => {
  const id = req.params.id
  Quiz.findByIdAndDelete(id, row =>{res.send(row)})
})

router.put('/update', async (req, res) => {
  try {
    const {_id} = req.body;
    delete req.body._id;
    await Quiz.findOneAndUpdate({_id: _id}, req.body)
  } catch (e) {
    res.send({message: "Error Update quiz"})
  }
})

module.exports = router