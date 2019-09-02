const express = require("express");
const router = express.Router();


//自己模块


router.get("/test1", (req, res) => {
  res.cookie("name", 18)
  res.redirect("/cookieTest.html")
});


module.exports = router;
