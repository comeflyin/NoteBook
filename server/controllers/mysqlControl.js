// 和数据库连接的相关操作
const mysql = require('mysql2');
const config = require('../config');

// 连接数据库
// 创建线程池
const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT,
}); 

// 连接mysql
const allService = {
  query: function(sql, values) {
    // pool 连接
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => { // mysql库自带的方法，获取连接
        if(err) {
          reject(err)
        } else {
          // 执行sql语句  
          connection.query(sql, values, (err, rows) => { // 这个query方法是mysql库自带的方法 不是上面自己定义的那个query方法 负责执行sql语句
            if(err) {
              reject(err)
            } else {
              resolve(rows)
            }
            // 结束会话
            connection.release() // 释放连接 一直连接mysql会导致内存泄漏 性能开销大
          })
        }
      })
    })
  } 
}

// 登录
const userLogin = (username, password) => {
  let _sql = `select * from users where username="${username}" and password="${password}";`
  return allService.query(_sql)
}

// 查询
const userFind = (username) => {
  let _sql = `select * from users where username="${username}";`
  return allService.query(_sql)
}

// 注册
const userRegister = (values) => { // [username, password, nickname]
  let _sql = `insert into users set username=?, password=?, nickname=?;`
  return allService.query(_sql,values)
}
// 根据类型查找笔记列表
const findNoteListByType = (note_type) => {
  let _sql = `select * from note where note_type="${note_type}";`
  return allService.query(_sql)
}

const findNoteDetailById = (id) => {
  let _sql = `select * from note where id="${id}";`
  return allService.query(_sql)
}

// 发布笔记
const notePublish = (values) => {
  let _sql = `insert into note set note_content=?, title=?, head_img=?, note_type=?, nickname=?, userId=?, c_time=?, m_time=?;`
  return allService.query(_sql, values)
}

module.exports = {
  userLogin,
  userFind,
  userRegister,
  findNoteListByType,
  findNoteDetailById,
  notePublish
}