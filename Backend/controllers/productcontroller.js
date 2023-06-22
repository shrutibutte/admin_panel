const productSchema = require("../module/Product");
const createproduct = async (req, res) => {
  const { name } = req.body;
  console.log("testtest");
  console.log(req.body);
  try {
    // Check if product already exists
    const product = await productSchema.findOne({ name });
    if (product) {
      return res.status(400).json({
        error: "Product already exists",
      });
    }

    // Create a new product
    const newProduct = new productSchema({
      name: req.body.name,
      price: req.body.price,
      image: req.file.image,
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

    await newProduct.save();

    res.status(200).json({
      message: "Product added successfully",
      product: newProduct,
    });
  } catch (error) {
    console.log("first");
    console.log(error);
    res.status(500).json({
      error: "Something went wrong",
    });
  }
};

const getproduct = async (req, res) => {
  try {
    const product = await productSchema.find({});
    res.status(200).json({
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
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
