const express = require('express');

const router = express.Router();

router.get("/add-product", (req, res, next) => {
	console.log("hi from first middleware");
	return res.send(
		'<form action="/product" method = "POST"><input type="text" name="title"><button tupe="submit">Add Product</button></form>'
	);
});

router.post("/product", (req, res, next) => {
	console.log(req.body);
	res.redirect("/");
});

module.exports = router;