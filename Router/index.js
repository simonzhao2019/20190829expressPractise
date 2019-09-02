const express = require("express");
const router = express.Router();
const md5 = require("blueimp-md5");

//自己模块
const userModel = require("../models/userModels");

router.get("/userlist", (req, res) => {
  userModel.find({}).then(
    userDocs => {
      res.render("users", { users: userDocs });
    },
    err => {
      res.render("errors", { msg: "查询用户列表失败" });
    }
  );
});
router.post("/add_user", (req, res) => {
  const { name, pwd, age, gender } = req.body;
  console.log(name)
  userModel
    .create({
      name,
      pwd: md5(pwd),
      age,
      gender
    })
    .then(
      userDocs => {
        res.redirect("/api/userlist");
      },
      err => {
        res.render("errors", {
          msg: "查询用户列表失败"
        });
      }
    );
});

module.exports = router;
