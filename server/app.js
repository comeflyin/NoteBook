const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser'); // 让koa能解析post参数
const cors = require('koa2-cors'); // 解决跨域问题

const user = require('./routes/user')
const note = require('./routes/note')

app.use(bodyParser()) // 使用bodyParser中间件
app.use(cors()) // 使用cors中间件 告诉浏览器允许跨域


// 主要逻辑
// const main = (ctx) => {
//   ctx.body = 'hello world'
// } 

app.use(user.routes(),user.allowedMethods())
app.use(note.routes(),note.allowedMethods())

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
})


