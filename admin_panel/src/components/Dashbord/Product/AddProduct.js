import React, { useState } from "react";
import Sidebar from "../../Sidebar";
import swal from "sweetalert";

const AddProduct = () => {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [healthy, sethealthy] = useState("");
  const [type, settype] = useState("");
  const [category, setcategory] = useState("");
  const [weight, setweight] = useState("");
  const [feature, setfeature] = useState("");
  const [tags, settags] = useState("");
  const [currency, setcurrency] = useState("");
  const [quantity, setquantity] = useState("");
  function convertTobase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    let images = e.target.image.files[0];
    const bs64 = await convertTobase64(images);
    const image = bs64;
    const formData = {
      name,
      price,
      description,
      healthy,
      type,
      category,
      weight,
      tags,
      image,
      feature,
      currency,
      quantity,
    };
    console.log(formData);
    const res = await fetch("http://localhost:5000/api/addproduct", {
      headers: {
        "Allow-Cross-Origin": "*",
        "Content-Type": "application/json",
        token: "bearer " + localStorage.getItem("token"),
      },
      method: "POST",
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log(data);
    if (data.error) {
      swal({
        title: "Error",
        text: `${data.error}`,
        icon: "error",
        button: "Ok",
      });
    } else {
      swal({
        title: "Success",
        text: `${data.message}`,
        icon: "success",
        button: "Ok",
      });
    }
    // e.target.reset();
  };

  return (
    <>
      <Sidebar></Sidebar>

      <div className="container mx-auto col-md-6  mx-auto border rounded my-3">
        <form
          onSubmit={handleSubmit}
          className="
        p-3 col-md-10 mx-auto"
          encType="multipart/form-data"
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
              onChange={(e) => {
                setname(e.target.value);
              }}
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
              onChange={(e) => {
                setprice(e.target.value);
              }}
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
              onChange={(e) => {
                setimage(e.target.files[0]);
              }}
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
              onChange={(e) => {
                setdescription(e.target.value);
              }}
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
              onChange={(e) => {
                sethealthy(e.target.value);
              }}
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
              onChange={(e) => {
                settype(e.target.value);
              }}
              required
            >
              <option value="fruit" selected>
                Fruit
              </option>
              <option value="vegetable">Vegetable</option>
              <option value="Masale">Masale</option>
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
              onChange={(e) => {
                setcategory(e.target.value);
              }}
              required
            >
              <option value="fruit" selected>
                Fruit
              </option>
              <option value="vegetable">Vegetable</option>
              <option value="Masale">Masale</option>
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
              onChange={(e) => {
                setweight(e.target.value);
              }}
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
              onChange={(e) => {
                setfeature(e.target.value);
              }}
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
              onChange={(e) => {
                settags(e.target.value);
              }}
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
              onChange={(e) => {
                setcurrency(e.target.value);
              }}
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
              onChange={(e) => {
                setquantity(e.target.value);
              }}
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
