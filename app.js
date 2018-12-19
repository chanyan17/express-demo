// 导入express模块
const express = require('express')

// 启动web服务器
const app = express()

// HTTP请求体解析的中间件
var bodyParser = require('body-parser')
// 创建application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })


var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017'

MongoClient.connect(url, (err, db) => {
  // if (err) throw err
  // console.log('数据库已创建')
  // db.close()


  // 创建集合
  // var dbase = db.db('demo')
  // dbase.createCollection('site', (err, res) => {
  //   if (err) throw err
  //   console.log('创建集合!')
  //   db.close()
  // })

  // 插入一条数据
  // var dbo = db.db('demo')
  // var myobj = {name: 'express', url: 'http://www.expressjs.com.cn'}
  // dbo.collection('site').insertOne(myobj, (err, res) => {
  //   if (err) throw err
  //   console.log('文档插入成功')
  //   db.close()
  // })

  // 查询数据
  // if (err) throw err
  // var dbo = db.db('demo')
  // dbo.collection('site').find({}).toArray((err, result) => {
  //   if (err) throw err
  //   console.log(result)
  //   db.close()
  // })

  // 查询指定条件的数据
  // if (err) throw err
  // var dbo = db.db('demo')
  // var whereStr = {'name': 'express'}
  // dbo.collection('site').find(whereStr).toArray((err, result) => {
  //   if (err) throw err
  //   console.log(result)
  //   db.close()
  // })

  // 更新一条数据
  // if (err) throw err
  // var dbo = db.db('demo')
  // var whereStr = {'name': 'express'}
  // var updateStr = {$set: {'url': 'https://www.expressjs.com.cn'}}
  // dbo.collection('site').updateOne(whereStr, updateStr, (err, result) => {
  //   if (err) throw err
  //   console.log('文档更新成功')
  //   db.close()
  // })

  // 更新多条数据
  // if (err) throw err
  // var dbo = db.db('demo')
  // var whereStr = {'type': 'en'}
  // var updateStr = {$set: { "url" : "https://www.expressjs.com.cn" }}
  // dbo.collection('site').updateMany(whereStr, updateStr, (err, res) => {
  //   if (err) throw err
  //   console.log(res.result.nModified + '条文档被更新')
  //   db.close()
  // })


  // 删除一条数据
  // if (err) throw err
  // var dbo = db.db('demo')
  // var whereStr = {'name': 'express'}
  // dbo.collection("site").deleteOne(whereStr, function(err, obj) {
  //     if (err) throw err;
  //     console.log("文档删除成功");
  //     db.close();
  // });

  // 删除多条数据
  // if (err) throw err;
  // var dbo = db.db('demo');
  // var whereStr = { type: 'en' };  // 查询条件
  // dbo.collection('site').deleteMany(whereStr, function(err, obj) {
  //   if (err) throw err;
  //   console.log(obj.result.n + " 条文档被删除");
  //   db.close();
  // });

  // 排序
  // { age: 1 }  // 按 age 字段升序
  // { age: -1 }  // 按 age 字段降序
  // if (err) throw err;
  // var dbo = db.db('demo');
  // var mysort = { age: -1 };
  // dbo.collection("site").find().sort(mysort).toArray(function(err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //     db.close();
  // });

  // 查询分页, 前面2条
  // if (err) throw err;
  // var dbo = db.db('demo');
  // dbo.collection("site").find().limit(2).toArray(function(err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //     db.close();
  // });

  // 查询分页, 跳过前面两条数据，读取两条数据
  // if (err) throw err;
  // var dbo = db.db('demo');
  // dbo.collection("site").find().skip(2).limit(2).toArray(function(err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //     db.close();
  // });

  // 查询分页：超过总条数
  // if (err) throw err;
  // var dbo = db.db('demo');
  // dbo.collection("site").find().skip(9).limit(2).toArray(function(err, result) {
  //     if (err) throw err;
  //     console.log(result); // []
  //     db.close();
  // });

  // 连接左操作
  // if (err) throw err
  // var dbo = db.db('demo')
  // dbo.collection('orders').aggregate([{
  //   $lookup: {
  //     // 右集合
  //     from: 'products',
  //     // 左集合join字段
  //     localField: 'product_id',
  //     // 右集合join字段
  //     foreignField: 'id',
  //     // 新生成字段(类型array)
  //     as: 'orderdetails'
  //   }
  // }]).toArray((err, res) => {
  //   if (err) throw err
  //   console.log(JSON.stringify(res))
  //   db.close()
  // })

  // 删除集合
  if (err) throw err;
  var dbo = db.db("demo");
  // 删除 test 集合
  dbo.collection("deleteDemo").drop(function(err, delOK) {
    if (err) throw err;
    // 执行成功 delOK 返回 true，否则返回 false
    if (delOK) console.log("集合已删除");
    db.close();
  });
})

// 使用中间件express.static来设置静态文件(图片，css, js)
// 浏览器可访问图片： http://localhost:3000/images/pic.jpg
app.use(express.static('public'))

// 请求与响应
app.get('/', (req, res) => res.send('Hello World!'))

// post请求
app.post('/', (req, res) => res.send('Hello Post'))

// 用户列表页面
app.get('/list_user', (req, res) => res.send('用户列表页面'))

// 对页面abcd,abxcd,ab123cd响应
app.get('/ab*cd', (req, res) => res.send('正则匹配'))

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" )
})

app.post('/process_post', urlencodedParser, (req, res) => {
  // 输出json格式
  var response = {
    "first_name": req.body.first_name,
    "last_name": req.body.last_name
  }
  res.end(JSON.stringify(response))
})

var server = app.listen(3000, () => {
  var port = server.address().port
  console.log('Example app listening on port %s', port)
})