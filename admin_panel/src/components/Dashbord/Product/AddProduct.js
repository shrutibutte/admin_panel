import React, { useState } from "react";
import Sidebar from "../../Sidebar";
import swal from "sweetalert";
const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    price: 0,
    image: "",
    description: "",
    healthy: "",
    type: "",
    category: "",
    weight: 0,
    feature: "",
    tags: "",
    currency: 0,
    quantity: 0,
  });

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/addproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Allow-Control-Allow-Origin": "*",
        token: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          swal("Product Added Successfully", "", "success");
        } else {
          swal("Product Added Failed", "", "error");
        }
      });
    e.target.reset();
  };

  return (
    <>
      <Sidebar></Sidebar>

      <div className="container mx-auto col-md-6  mx-auto border rounded my-3">
        <form
          onSubmit={handleSubmit}
          className="
        p-3 col-md-10 mx-auto"
        >
          <div className="mb-3 ">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={productData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image URL
            </label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              value={productData.image}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={productData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="healthy" className="form-label">
              Healthy
            </label>
            <input
              type="text"
              className="form-control"
              id="healthy"
              name="healthy"
              value={productData.healthy}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="type" className="form-label">
              Type
            </label>
            <select
              className="form-control form-select"
              id="type"
              name="type"
              value={productData.type}
              onChange={handleChange}
              required
            >
              <option value="fruit">Fruit</option>
              <option value="vegetable">Vegetable</option>
              <option value="meat">Masale</option>
              <option value="fish">Oil</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              className="form-control form-select"
              id="category"
              name="category"
              value={productData.category}
              onChange={handleChange}
              required
            >
              <option value="fruit">Fruit</option>
              <option value="vegetable">Vegetable</option>
              <option value="meat">Masale</option>
              <option value="fish">Oil</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="weight" className="form-label">
              Weight
            </label>
            <input
              type="number"
              className="form-control"
              id="weight"
              name="weight"
              value={productData.weight}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="feature" className="form-label">
              Feature
            </label>
            <input
              type="text"
              className="form-control"
              id="feature"
              name="feature"
              value={productData.feature}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tags" className="form-label">
              Tags
            </label>
            <input
              type="text"
              className="form-control"
              id="tags"
              name="tags"
              value={productData.tags}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="currency" className="form-label">
              Currency
            </label>
            <input
              type="number"
              className="form-control"
              id="currency"
              name="currency"
              value={productData.currency}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
