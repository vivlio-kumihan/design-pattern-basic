"use strict";

// expressをロードする。
const express = require("express"),
  app = express(),
  router = express.Router();

// portの確保（オプション--環境変数で指定がなければ3000番を使う。）
app.set("port", process.env.PORT || 3000);

// for query, params, json
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

// for DB
const mongoose = require("mongoose");

// DBに接続
mongoose.connect(
  // DB名
  "mongodb://localhost:27017/contact",
  // エラーの対処
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
mongoose.set("useCreateIndex", true);
mongoose.set('useFindAndModify', false);


  // mongoDBへ該当のDBを接続する。
const db = mongoose.connection;
  // 接続確認のログを出力する。
db.once("open", () => {
  console.log("MongoDBへの接続は成功しました。")
});

// for Promise
// mongooseのPromiseではなく、グローバルのpromiseを使う。
mongoose.Promise = global.Promise;

// 静的ファイルの関連付けを『assets』ディレクトリとする。
router.use(express.static("assets"));

// レイアウト
  // viewに関連するファイルの経路の起点となるディレクトリを有効にする。
const layouts = require("express-ejs-layouts");
  // ejs形式ファイルの使用を設定する。
app.set("view engine", "ejs");
  // express-ejs-layoutsモジュールを使うことを宣言する。
  // viewsディレクトリにファイルを配置する。
  // レイアウトのための設計図であるlayout.ejsが必須。
router.use(layouts);

// PUTメソッドをエミュレートするためのモジュールをロードする。
const methodOverride = require("method-override");
router.use(methodOverride("_method", {
  methods: ["POST", "GET"]
}));

// 経路
  // リクエストが来た時の反応をここでスイッチングしていく。
router.get("/", (req, res) => {
  // 初期状態の様子をみるため、ブラウザに文字列を送信してテストしてみる。
  // res.send("Here is ROOT.");
  res.render("index");
});
  // for elements
router.get("/elements", (req, res) => {
  res.render("elements");
});
  // for generic
router.get("generic", (req, res) => {
  res.render("generic");
});

// for CRUD, contact module
router.get("/contact", (req, res) => {
  res.render("contact/index");
});
  // modelを構築する場合のpath設定
// router.get("/contacts", contactsCtl.index);
// router.get("/contacts", contactsCtl.index, contactsCtl.indexView);
// router.get("/contacts/new", contactsCtl.new);
// router.post("/contacts/create", contactsCtl.create, contactsCtl.redirectView);
// router.get("/contacts/:id", contactsCtl.show, contactsCtl.showView);
// router.get("/contacts/:id/edit", contactsCtl.edit);
// router.put("/contacts/:id/update", contactsCtl.update, contactsCtl.redirectView);
// router.delete("/contacts/:id/delete", contactsCtl.delete, contactsCtl.redirectView);

app.use("/", router);

// アプリがPORTを監視するための設定
app.listen(app.get("port"), () => {
  console.log(`サーバーはhttp://localhost:${app.get("port")}で起動しています。`);
});