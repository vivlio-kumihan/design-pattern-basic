"use strict";

// expressをロードする。
const express = require("express"),
      app = express(),
      router = express.Router();

// portの確保（オプション--環境変数で指定がなければ3000番を使う。）
app.set("port", process.env.PORT || 3000);

// 本文の解析で、
// URLエンコーディングとJSONパラメータの処理を行う。
// ///////////////////////////////////////////////全然理解してない箇所
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

// for DB
const mongoose = require("mongoose");

// DBに接続
mongoose.connect(
  // DB名
  "mongodb://localhost:27017/common_site",
  // エラーの対処
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true });
  mongoose.set("useCreateIndex", true);
  mongoose.set('useFindAndModify', false);


  //   mongoDBへ該当のDBを接続する。
  const db = mongoose.connection;
  //   接続確認のログを出力する。
  db.once("open", () => {
    console.log("MongoDBへの接続は成功しました。")
  });

// Promise
// mongooseのPromiseではなく、グローバルのpromiseを使う。
mongoose.Promise = global.Promise;

// 静的ファイルの関連付けを『assets』ディレクトリとする。
router.use(express.static("assets"));

// レイアウト
//   viewに関連するファイルの経路の起点となるディレクトリを有効にする。
const layouts = require("express-ejs-layouts");
//   ejs形式ファイルの使用を設定する。
app.set("view engine", "ejs");
//   express-ejs-layoutsモジュールを使うことを宣言する。
//   viewsディレクトリにファイルを配置する。
//   レイアウトのための設計図であるlayouts.ejsが必須。
router.use(layouts);

// controllerのメソッドをロードする。    
// const coursesCtl = require("./controllers/coursesCtl");

// PUTメソッドをエミュレートするためのモジュールをロードする。
const methodOverride = require("method-override");
router.use(methodOverride("_method", {
  methods: ["POST", "GET"]
}));

// 経路
//   リクエストが来た時の反応をここでスイッチングしていく。
//   for index.ejs

router.get("/", (req, res) => {
  // 初期状態の様子をみるため、ブラウザに文字列を送信してテストしてみる。
  // res.send("Here is ROOT.");
  res.render("index");
});

router.get("/position", (req, res) => {
  // res.send("Here is position.");
  res.render("info/position");

});

// //  contollerに配列で値を仕込んでおいてviewに渡す際の書き方。
// router.get("/FILE_NAME",
//   CONTOLLER_NAME.METHOD, (req, res, next) => {
//     res.render("INSTANCE_NAME", { PARAMS: req.data });
//   }
// );

// for user module
// router.get("/users", usersCtl.index);
// router.get("/users", usersCtl.index, usersCtl.indexView);
// router.get("/users/new", usersCtl.new);
// router.post("/users/create", usersCtl.create, usersCtl.redirectView);
// router.get("/users/:id", usersCtl.show, usersCtl.showView);
// router.get("/users/:id/edit", usersCtl.edit);
// router.put("/users/:id/update", usersCtl.update, usersCtl.redirectView);
// router.delete("/users/:id/delete", usersCtl.delete, usersCtl.redirectView);

app.use("/", router);

// アプリがPORTを監視するための設定
app.listen(app.get("port"), () => {
  console.log(`サーバーはhttp://localhost:${ app.get("port") }で起動しています。`);
});