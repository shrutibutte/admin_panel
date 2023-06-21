import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyStore from "./components/MyStore";
import Login from "./components/Login";
import AdminHub from "./components/AdminHub";
import Login1 from "./components/Autho/Login1";
import Register from "./components/Autho/RegisterAdmin";
import ProductList from "./components/Dashbord/Product/ProductList";
import AddProuct from "./components/Dashbord/Product/AddProduct";

const checkAuth = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return false;
  }

  return true;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {checkAuth() ? (
            <>
              <Route path="/Home" element={<AdminHub />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/addproduct" element={<AddProuct />} />
              <Route path="/register" element={<Register />} />
              <Route path="/mystore" element={<MyStore />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Login1 />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
