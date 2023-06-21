const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      require: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: true,
    },
    healthy: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    weight: {
      type: Number,
      require: true,
    },
    feature: {
      type: String,
      require: true,
    },
    tags: {
      type: String,
      require: true,
    },
    currency: {
      type: Number,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
