const express = require("express");
const product = express();
const bodyParser = require("body-parser");
const auth = require("../Middlewares/autho");

product.use(bodyParser.json());
product.use(bodyParser.urlencoded({ extended: true }));

const multer = require("multer");
const path = require("path");
product.use(express.static("./public/"));

const storage = multer.diskStorage({
  destination: function (req, file, cp) {
    cp(null, path.join(__dirname, "../public/images/"), function (err) {
      if (err) {
        console.log(err);
      }
    });
  },
  filename: function (req, file, cp) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cp(new Error("Please upload a image"));
    }

    cp(null, Date.now() + file.originalname, function (err) {
      if (err) {
        console.log(err);
      }
    });
  },
});
console.log(storage);
const upload = multer({ storage: storage });

const Productcontrolar = require("../controllers/productcontroller");
// check image alredy exist or not

product.post(
  "/addproduct",
  upload.single("image"),
  Productcontrolar.createproduct
);

product.get("/getproduct", auth, Productcontrolar.getproduct);
product.get("/getproduct/:id", auth, Productcontrolar.getproductbyid);
product.put(
  "/updateproduct/:id",
  upload.single("image"),
  auth,
  Productcontrolar.updateproduct
);
product.delete("/deleteproduct/:id", auth, Productcontrolar.deleteproduct);

module.exports = product;
