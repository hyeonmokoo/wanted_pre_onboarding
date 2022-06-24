//index.js

/*
// sqlite db 블러오기
const db_name = path.join(__dirname, "data", "recruit.db");
const db = new sqlite3.Database(db_name, err => {
  if(err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database 'recruit.db'");
});
*/

// 1. sequelize db model 불러오기
const models = require("./models/index.js")

models.sequelize.sync().then( () =>{
    console.log("DB 연결 성공");
}).catch(err => {
    console.log("연결 실패");
    console.log(err);
})

// 2. express
const express = require("express");
const ejs = require("ejs");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

var app = express(); // Express server의 시작
var port = process.env.PORT || 3000;

app.set("view engine", "ejs"); // ejs 엔진을 사용한다고 선언하기
// views들이 views 폴더에 저장됨을 설정
app.set("views", path.join(__dirname, "views")); // app.set("views", __dirname + "/views"); 와 동일한 의미
app.use(express.static(path.join(__dirname, "public"))); // css와 같은 static file들이 저장된 경로 설정
app.use(express.urlencoded({extended: false})); // middleware configuration

const helloworldRouter = require("./routes/helloworld")
const rboardRouter = require("./routes/rboard")
//app.use("/". helloworldRouter) // router 설정
//app.use("/rboard". rboardRouter) // router 설정


app.listen(port, function() {
  console.log("Server started (http://localhost:3000/) !");
});

app.get("/", function(req, res, next) {
  // HTTP의 body부분에 텍스트를 반환함
  res.send ("Hello world!!!");
});

app.get("/rboard/show", function(req, res, next) {
  res.render("show")
});

app.get("/rboard/add", function(req, res, next) {
  res.render("add")
});

app.post('/rboard/add', function(req, res, next) {
  let body = req.body;

  models.post.create({
      companyId   : body.inputCompanyId,
      companyName : body.inputCompanyName,
      nation      : body.inputNation,
      region      : body.inputRegion,
      position    : body.inputPosition,
      salary      : body.inputSalary,
      skill       : body.inputSkill,
      post        : body.inputPost
  })
      .then( result => {
          console.log("데이터 추가 완료");
          res.redirect("/board");
      })
      .catch( err => {
          console.log("데이터 추가 실패");
      })
});