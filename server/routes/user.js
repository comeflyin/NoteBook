const Router = require("koa-router");
const router = new Router();
const {
  userLogin,
  userFind,
  userRegister,
} = require("../controllers/mysqlControl.js");
const jwt = require("jsonwebtoken");

// 密钥
const secretKey = 's3/9P8ZrgWzxyN5YQSo1xkgy2P6C1cWpxkAu8vJT8pM='

// 定义登录接口
router.post("/login", async (ctx) => {
  // 获取到前端传递的账号密码，去数据库中校验账号密码的正确性
  const { username, password } = ctx.request.body;
  try {
    const result = await userLogin(username, password);

    // console.log( result[0].id,result[0].nickname,result[0].username,);

    if (result.length) {
      // 账号密码存在


      // 生成token 有效期为1小时
      const token = jwt.sign(
        {
          id: result[0].id,
          username: result[0].username,
        },
        secretKey,
        { algorithm: 'HS256', expiresIn: '1h' }
      );
      console.log(token);
      let data = {
        id: result[0].id,
        nickname: result[0].nickname,
        username: result[0].username,
        token: token, // 返回token
      };
      ctx.body = {
        code: "8000",
        data: data,
        msg: "登录成功",
      };
    } else {
      ctx.body = {
        code: "8004",
        data: "error",
        msg: "账号或密码错误",
      };
    }
  } catch (error) {
    ctx.body = {
      code: "8005",
      data: error,
      msg: "服务器异常",
    };
  }
});

// 定义注册接口
router.post("/register", async (ctx) => {
  // 拿到前端传过来的 username，password，nickname
  // 去数据库中校验 username 是否存在，如果存在，返回用户名已存在，如果不存在，注册成功
  // 往数据库中植入一条新的数据
  const { username, password, nickname } = ctx.request.body;
  if (!username || !password || !nickname) {
    ctx.body = {
      code: "8001",
      data: "error",
      msg: "账号密码或昵称不能为空",
    };
    return;
  }

  // 注册
  try {
    // 去数据库中校验 username 是否存在
    const findRes = await userFind(username);
    if (findRes.length) {
      // 账号已存在
      ctx.body = {
        code: "8003",
        data: "error",
        msg: "账号已存在",
      };
      return;
    }

    // 往数据库中植入一条新的数据
    const registerRes = await userRegister([username, password, nickname]);
    if (registerRes.affectedRows !== 0) {
      ctx.body = {
        code: "8000",
        data: "success",
        msg: "注册成功",
      };
    } else {
      ctx.body = {
        code: "8004",
        data: "error",
        msg: "注册失败",
      };
    }
  } catch (error) {
    ctx.body = {
      code: "8005",
      data: error,
      msg: "服务器异常",
    };
  }
});

// JWT鉴权
router.get('/protected-route', (ctx) => {
  // 从前端请求头中获取Token
  console.log(ctx.header.authorization);
  const tokenWithQuotes  = ctx.header.authorization?.replace('Bearer ', '');
  const token = tokenWithQuotes?.slice(1, tokenWithQuotes.length - 1);
  console.log(token);
  try {
    // 验证Token
    const decoded = jwt.verify(token, secretKey, { algorithms: ['HS256'] });
    // console.log(decoded);
    // Token有效，返回受保护的资源
    ctx.body = {
      code: "8000",
      data: "success",
      msg: "Access",
    };
  } catch (error) {
    // Token无效或过期
    ctx.body = {
      code: "8005",
      data: error,
      msg: "token无效或过期请重新登录",
    };
  }
});


module.exports = router;
