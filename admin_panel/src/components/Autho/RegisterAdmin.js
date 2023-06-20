import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password, name };
    console.log(user);
    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Allow-Cross-Origin": "*",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
          swal({
            title: "Error",
            text: res.error,
            icon: "error",
            button: "ok",
          });
        } else {
          swal({
            title: "Success",
            text: res.message,
            icon: "success",
            button: "ok",
          }).then((response) => {
            window.location.href = "/home";
          });
        }
      });
    e.target.reset();
  };

  return (
    <>
      <div className="container mx-auto mt-12" style={{ marginTop: "100px" }}>
        <h2 className="text-center text-green-600 text-2xl font-bold mb-6">
          Registration Form
        </h2>
        <form
          onSubmit={handleSubmit}
          method="post"
          className="col-md-4 mx-auto"
        >
          {" "}
          <div className="mb-4">
            <label htmlFor="email" className="form-label">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="name"
              required
              className="form-control"
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="psw" className="form-label">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <div className="mb-4 d-flex flex-row">
            <label htmlFor="type" className="form-label">
              Type
            </label>
            <div className="form-check  " style={{ marginLeft: "5px" }}>
              <input
                className="form-check-input"
                type="radio"
                name="type"
                value="user"
                onChange={(e) => setType(e.target.value)}
              />
              <label className="form-check-label">User</label>
            </div>
            <div className="form-check " style={{ marginLeft: "5px" }}>
              <input
                className="form-check-input"
                type="radio"
                name="type"
                value="admin"
                onChange={(e) => setType(e.target.value)}
              />
              <label className="form-check-label">Admin</label>
            </div>
          </div> */}
          <button type="submit" className="btn btn-success w-100">
            <Link to="/Register" className="text-white text-decoration-none">
              Register
            </Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
