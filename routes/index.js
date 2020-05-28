const express = require("express");
const router = express.Router();

const Post = require("../model/post");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/", function (req, res, next) {
  const post = new Post({
    author: req.body.author,
    title: req.body.title,
    body: req.body.body,
    date: new Date(),
  });

  post.save((err) => {
    if (err) {
      console.info(err.stack);
    } else {
      // handle success
      console.log("Successful");
      res.render("index", { title: "Express" });
      return;
    }
  });
});

module.exports = router;
