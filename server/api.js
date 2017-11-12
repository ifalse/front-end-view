const models = require('./db')
const express = require('express')
const router = express.Router()

router.route('/login').post(function (req, res) { // 从此路径检测到post方式则进行post数据的处理操作
  // get User info
  // 这里的User就是从model中获取user对象，通过global.dbHandel全局方法（这个方法在app.js中已经实现)
  var User = models.User
  var uname = req.body.username // 获取post上来的 data数据中 uname的值
  User.findOne({ username: uname }, function (err, doc) { // 通过此model以用户名的条件 查询数据库中的匹配信息
    if (err) { // 错误就返回给原post处（login.html) 状态码为500的错误
      res.send(500)
      console.log(err)
    } else if (!doc) { // 查询不到用户名匹配信息，则用户名不存在
      res.send({code: 2, err: '用户不存在！'})
      // res.redirect("/login");
    } else {
      doc.comparePassword(req.body.password, function (err, isMatch) {
        if (err) throw err
        if (!isMatch) {
          res.send({code: 2, err: '账号或密码错误！'})
        } else {
          res.send({code: 1, err: '登录成功！'})
        }
      })
    }
  })
})

router.route('/register').post(function (req, res) {
  // 这里的User就是从model中获取user对象，通过global.dbHandel全局方法（这个方法在app.js中已经实现)
  var User = models.User
  var uname = req.body.username
  var upwd = req.body.password
  User.findOne({ username: uname }, function (err, doc) { // 同理 /login 路径的处理方式
    if (err) {
      res.send(500)
      // res.send({code: 2, err: '网络异常错误！'})
      console.log(err)
    } else if (doc) {
      res.send({code: 2, err: '用户名已存在！'})
      console.log('用户名已存在！')
    } else {
      var u = new User({ // 创建一组user对象置入model
        username: uname,
        password: upwd
      })
      u.save(function (err, doc) {
        if (err) {
          res.send(500)
          console.log(err)
        } else {
          res.send({code: 1, err: '用户名创建成功！'})
        }
      })
    }
  })
})

module.exports = router
