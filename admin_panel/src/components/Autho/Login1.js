import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    fetch("http://localhost:5000/login", {
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
        console.log(res);
        if (
          res.error === "user not found" ||
          res.error === "invalid credentials" ||
          res.error === "something went wrong"
        ) {
          swal({
            title: "Error",
            text: res.error,
            icon: "error",
            button: "ok",
          });
        } else {
          console.log(res);
          localStorage.setItem("token", res.token);
          swal({
            title: "Success",
            text: res.message,
            icon: "success",
            button: "ok",
          }).then((responce) => {
            window.location.href = "/Home";
          });
        }
      });
    e.target.reset();
  };

  return (
    <>
      <div className="container mx-auto my-12" style={{ marginTop: "100px" }}>
        <h2 className="text-center text-dark text-2xl font-bold mb-6">
          Login Form
        </h2>
        <form
          onSubmit={handleSubmit}
          method="post"
          className="col-md-4 mx-auto my-4"
        >
          <div className="mb-4 ">
            <label htmlFor="uname" className="form-label">
              Username
            </label>
            <input
              type="email"
              placeholder="Enter Username"
              name="uname"
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

          <button type="submit" className="btn btn-success w-100">
            <Link to="/Login" className="text-white text-decoration-none">
              Login
            </Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
