const Router = require("express")
const router = new Router()
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const config = require("config")
const jwt = require("jsonwebtoken")
const {check, validationResult} = require("express-validator")
const authMiddleware = require('../middleware/auth.middleware')

router.post('/registration',
  [
    check('email', "Не правильный email").isEmail(),
    check('password', 'Пароль не должен быть меньше 3 и больше 12 символов').isLength({min: 3, max: 12}),
    check('nickname', 'Ник не должен быть меньше 3 и больше 12 символов').isLength({min: 3, max: 12}),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({message: "Заполните все обязательные поля", errors})
      }
      const {email, password, nickname} = req.body
      const name = await User.findOne({nickname})
      if (name) {
        return res.status(400).json({message: `Пользователь с таким ником ${nickname} уже существует`})
      }
      const candidate = await User.findOne({email})
      if (candidate) {
        return res.status(400).json({message: `Пользователь с таким email ${email} уже существует`})
      }
      const hashPassword = await bcrypt.hash(password, 8)
      const user = new User({email, password: hashPassword, nickname})
      await user.save()
      res.json({message: "Пользователь создан"})
    } catch (e) {
      console.log(e)
      res.send({message: "Ошибка при регистрации"})
    }
  })


router.post('/login',
  async (req, res) => {
    try {
      const {email, password} = req.body
      const user = await User.findOne({email})
      if (!user) {
        return res.status(404).json({message: "Пользователь не найден, введите другой Email"})
      }
      const isPassValid = bcrypt.compareSync(password, user.password)
      if (!isPassValid) {
        return res.status(400).json({message: "Не правильный пароль"})
      }
      const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
      return res.json({
        token
      })
    } catch (e) {
      console.log(e)
      res.send({message: "Ошибка входа"})
    }
  })

router.get('/auth', authMiddleware,
  async (req, res) => {
    try {
      const user = await User.findOne({_id: req.user.id})
      const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
      return res.json({
        token
      })
    } catch (e) {
      console.log(e)
      res.send({message: "Ошибка аунтефикации"})
    }
  })


module.exports = router
