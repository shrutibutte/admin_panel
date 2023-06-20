const productSchema = require("../module/Product");
const createproduct = async (req, res) => {
  const productname = await productSchema.findOne({ name: req.body.name });
  console.log(productname);
  if (productname) {
    return res.status(400).send("Product already exist");
  }
  try {
    const product = new productSchema({
      name: req.body.name,
      price: req.body.price,
      image: req.file.filename,
      description: req.body.description,
      healthy: req.body.healthy,
      type: req.body.type,
      category: req.body.category,
      weight: req.body.weight,
      feature: req.body.feature,
      tags: req.body.tags,
      currency: req.body.currency,
      quantity: req.body.quantity,
    });
    await product.save();
    res.status(200).send({
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    res.send(error);
  }
};

const getproduct = async (req, res) => {
  try {
    const product = await productSchema.find({});
    res.status(200).send(product);
  } catch (error) {
    console.log(error);
  }
};

const getproductbyid = async (req, res) => {
  try {
    const product = await productSchema.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).send(product);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

// const updateproduct = async (req, res) => {
//   const product = await productSchema.findById(req.params.id);
//   if (!product) {
//     return res.status(404).json({
//       message: "Product not found",
//     });
//   }
//   const {
//     name,
//     price,
//     description,
//     healthy,
//     type,
//     category,
//     weight,
//     feature,
//     tags,
//     currency,
//     quantity,
//   } = req.body;
//   const newitem = {
//     name: name,
//     price: price,
//     description: description,
//     healthy: healthy,
//     type: type,
//     category: category,
//     weight: weight,
//     feature: feature,
//     tags: tags,
//     currency: currency,
//     quantity: quantity,
//     // image: req.file.filename,
//   };
//   try {
//     await productSchema.findByIdAndUpdate(req.params.id, newitem, {
//       new: true,
//     });

//     res.status(200).json({
//       message: "Product updated successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       message: "Something went wrong",
//     });
//   }
// };
const updateproduct = async (req, res) => {
  try {
    const product = await productSchema.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    const newitem = {
      name: req.body.name,
      price: req.body.price,
      image: req.file.filename,
      description: req.body.description,
      healthy: req.body.healthy,
      type: req.body.type,
      category: req.body.category,
      weight: req.body.weight,
      feature: req.body.feature,
      tags: req.body.tags,
      currency: req.body.currency,
      quantity: req.body.quantity,
    };
    // Update the product
    await productSchema.findByIdAndUpdate(req.params.id, newitem, {
      new: true,
    });

    res.status(200).json({
      message: "Product updated successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const deleteproduct = async (req, res) => {
  const product = await productSchema.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  try {
    const product = await productSchema.findByIdAndDelete(req.params.id);
    res.status(200).send({ product, message: "Product deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createproduct,
  getproduct,
  getproductbyid,
  updateproduct,
  deleteproduct,
};
