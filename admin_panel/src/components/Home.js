import React, { useState } from 'react';
import '../style/home.css'; // Import the CSS file

const Sidebar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(0);

  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };

  return (
    <section id="sidebar">
      <a href="#" className="brand">
        <i className="bx bxs-smile"></i>
        <span className="text">AdminHub</span>
      </a>
      <ul className="side-menu top">
        <li className={activeMenuItem === 0 ? 'active' : ''}>
          <a href="#" onClick={() => handleMenuItemClick(0)}>
            <i className="bx bxs-dashboard"></i>
            <span className="text">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleMenuItemClick(1)}>
            <i className="bx bxs-shopping-bag-alt"></i>
            <span className="text">My Store</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleMenuItemClick(2)}>
            <i className="bx bxs-doughnut-chart"></i>
            <span className="text">Analytics</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleMenuItemClick(3)}>
            <i className="bx bxs-message-dots"></i>
            <span className="text">Message</span>
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleMenuItemClick(4)}>
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
          <a href="#" className="logout">
            <i className="bx bxs-log-out-circle"></i>
            <span className="text">Logout</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

const Content = () => {
  const [isSidebarHidden, setSidebarHidden] = useState(false);
  const [isSearchFormVisible, setSearchFormVisible] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarHidden((prev) => !prev);
  };

  const handleToggleSearchForm = (e) => {
    if (window.innerWidth < 576) {
      e.preventDefault();
      setSearchFormVisible((prev) => !prev);
    }
  };

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Add event listeners for resizing and other logic

  return (
    <section id="content">
      <nav>
        <i className="bx bx-menu" onClick={handleToggleSidebar}></i>
        <a href="#" className="nav-link">Categories</a>
        <form action="#">
          <div className="form-input">
            <input type="search" placeholder="Search..." />
            <button type="submit" className="search-btn">
              <i className="bx bx-search"></i>
            </button>
          </div>
        </form>
        <input
          type="checkbox"
          id="dark-mode-toggle"
          className="dark-mode-toggle"
          checked={isDarkMode}
          onChange={handleToggleDarkMode}
        />
        <label htmlFor="dark-mode-toggle" className="dark-mode-label">
          <i className="bx bxs-moon"></i>
          <i className="bx bx-sun"></i>
          <div className="toggle-indicator"></div>
        </label>
        <a
          href="#"
          className={`search-icon ${isSearchFormVisible ? 'active' : ''}`}
          onClick={handleToggleSearchForm}
        >
          <i className="bx bx-search"></i>
        </a>
        <a href="#" className="profile">
          <img src="profile.jpg" alt="Profile" />
        </a>
      </nav>
      <main>
        <div className={`sidebar ${isSidebarHidden ? 'hidden' : ''}`}>
          <ul>
            <li>
              <a href="#">
                <i className="bx bxs-dashboard"></i>
                <span className="text">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxs-shopping-bag-alt"></i>
                <span className="text">My Store</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxs-doughnut-chart"></i>
                <span className="text">Analytics</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxs-message-dots"></i>
                <span className="text">Message</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxs-group"></i>
                <span className="text">Team</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxs-cog"></i>
                <span className="text">Settings</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="content">
          <h2>Dashboard</h2>
          <div className="cards">
            <div className="card">
              <i className="bx bx-briefcase-alt"></i>
              <div className="card-info">
                <h3>Total Orders</h3>
                <p>5,461</p>
              </div>
            </div>
            <div className="card">
              <i className="bx bx-pie-chart-alt-2"></i>
              <div className="card-info">
                <h3>Sales</h3>
                <p>$34,259</p>
              </div>
            </div>
            <div className="card">
              <i className="bx bx-user"></i>
              <div className="card-info">
                <h3>New Customers</h3>
                <p>1,589</p>
              </div>
            </div>
            <div className="card">
              <i className="bx bx-chat"></i>
              <div className="card-info">
                <h3>Feedbacks</h3>
                <p>821</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

const AdminHub = () => {
  return (
    <div>
      <Sidebar />
      <Content />
    </div>
  );
};

export default AdminHub;
