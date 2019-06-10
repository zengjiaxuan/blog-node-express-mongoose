const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const router = require('./router')
const app = express()
// 配置模板引擎
app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/'))
// 配置解析表里的body 当post的时候
app.use(bodyParser.urlencoded({ extend: false}))
app.use(bodyParser.json())
// 适应静态资源服务
app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))
// 挂载路由
app.use(router)
app.listen(3000, ()=> console.log('app is running at http://127.0.1:3000/'))