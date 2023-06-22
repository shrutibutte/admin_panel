import React from "react";
import "../style/sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <section id="sidebar">
      <a href="#" className="brand">
        <i className="bx bxs-smile"></i>
        <span className="text">AdminHub</span>
      </a>
      <ul className="side-menu top">
        <li className="active">
          <a href="#">
            <i className="bx bxs-dashboard"></i>
            <span className="text">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-doughnut-chart"></i>
            <span className="text">Profile</span>
          </a>
        </li>
        <li>
          <Link to="/products">
            <i className="bx bxs-shopping-bag-alt"></i>
            <span className="text">My Store</span>
          </Link>
        </li>
        <li>
          <Link to="/addproduct">
            <i className="bx bxs-shopping-bag-alt"></i>
            <span className="text">Add Procuct</span>
          </Link>
        </li>
        <li>
          <a href="#">
            <i className="bx bxs-group"></i>
            <span className="text">Team</span>
          </a>
        </li>
      </ul>
      <ul className="side-menu">
        <li>
          <a href="#">
            <i className="bx bxs-cog"></i>
            <span className="text">Settings</span>
          </a>
        </li>
        <li>
          <Link to="/register">
            <i className="bx bxs-cog"></i>
            <span className="text">Create Admin</span>
          </Link>
        </li>

        <li>
          <Link
            to="/login"
            className="logout"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}
          >
            <i className="bx bxs-log-out-circle"></i>
            <span className="text">Logout</span>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
