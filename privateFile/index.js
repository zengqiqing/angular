const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config.js')
const dynamicRouter = require('./routes/dynamicRouter.js')
console.log('引入dynamicRouter完成')
const app = express()
const server = [
  // '127.0.0.1', // IP
  8988  // PORT
]

// 根据参数读取对应的文件
const dataStr = fs.readFileSync('./db.json', 'utf-8')
const data = {}
// console.log(dataStr)
try {
  Object.assign(data, JSON.parse(dataStr))
  // console.log(config.data)
} catch (e) {
  throw '数据格式不对'
}
// const router = dynamicRouter.generate() // 动态生成路由!

app.use(express.static('www'))
app.use(express.static('www/images'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.get('/:category', (req, res) => {
  console.log(category)
})

app.listen(...server, err => {
  if (err) return console.log('服务器，出错了!', err)
  console.log(`服务器启动成功`)
  console.log(`请求地址:`)
})
