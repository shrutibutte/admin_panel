import React,{useState} from 'react';
import '../style/content.css';
const Content = () => {

    const [activeMenuItem, setActiveMenuItem] = useState(0);

    const handleMenuItemClick = (index) => {
      setActiveMenuItem(index);
    };
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
  return (
    <section id="content" >
      <nav>
        <i className="bx bx-menu"></i>
        <a href="#" className="nav-link">Categories</a>
        <form action="#">
          <div className="form-input">
            <input type="search" placeholder="Search..." />
            <button type="submit" className="search-btn"><i className="bx bx-search"></i></button>
          </div>
        </form>
        <input type="checkbox" id="switch-mode" hidden checked={isDarkMode}
          onChange={handleToggleDarkMode} />
        <label htmlFor="switch-mode" className="switch-mode"></label>
        <a  className="notification">
          <i className="bx bxs-bell"></i>
          <span className="num">8</span>
        </a>
        <a href="#" className="profile">
          <img src="people.png" alt="Profile" />
        </a>
      </nav>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Dashboard</h1>
            <ul className="breadcrumb">
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li><i className="bx bx-chevron-right"></i></li>
              <li>
                <a className="active" href="#">Home</a>
              </li>
            </ul>
          </div>
          <a href="#" className="btn-download">
            <i className="bx bxs-cloud-download"></i>
            <span className="text">Download PDF</span>
          </a>
        </div>
        <ul className="box-info">
          <li>
            <div className="box">
              <div className="content">
                <h2>$12,400</h2>
                <p>Total Revenue</p>
              </div>
              <i className="bx bxs-box"></i>
            </div>
          </li>
          <li>
            <div className="box">
              <div className="content">
                <h2>$4,250</h2>
                <p>Total Expenses</p>
              </div>
              <i className="bx bxs-cart-alt"></i>
            </div>
          </li>
          <li>
            <div className="box">
              <div className="content">
                <h2>1,200</h2>
                <p>Total Orders</p>
              </div>
              <i className="bx bxs-shopping-bags"></i>
            </div>
          </li>
          <li>
            <div className="box">
              <div className="content">
                <h2>980</h2>
                <p>Total Customers</p>
              </div>
              <i className="bx bxs-user"></i>
            </div>
          </li>
        </ul>
        <div className="table-data">
          <div className="order">
            <h3>Recent Orders</h3>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ORD-001</td>
                  <td>John Doe</td>
                  <td>2023-06-15</td>
                  <td>$450</td>
                  <td><span className="status process">process</span></td>
                </tr>
                <tr>
                  <td>ORD-002</td>
                  <td>Jane Smith</td>
                  <td>2023-06-14</td>
                  <td>$980</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
                <tr>
                  <td>ORD-003</td>
                  <td>Mark Johnson</td>
                  <td>2023-06-13</td>
                  <td>$320</td>
                  <td><span className="status completed">Completed</span></td>
                </tr>
                <tr>
                  <td>ORD-004</td>
                  <td>Lisa Brown</td>
                  <td>2023-06-12</td>
                  <td>$150</td>
                  <td><span className="status pending">Pending</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="todo">
					<div class="head">
						<h3>List of type of vegetable</h3>
						<i class='bx bx-plus' ></i>
						<i class='bx bx-filter' ></i>
					</div>
					<ul class="todo-list">
						<li class="completed">
							<p>Geafy green</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="completed">
							<p>cruciferous</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="not-completed">
							<p> root</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="completed">
							<p>Fruit</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						
					</ul>
				</div>
        </div>
      </main>
    </section>
  );
};

export default Content;
