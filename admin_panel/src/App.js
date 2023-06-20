import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyStore from "./components/MyStore";
import Login from "./components/Login";
import AdminHub from './components/AdminHub';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/home" element={<AdminHub/>} />
          <Route path="/" element={<Login/>} />
          <Route path="/mystore" element={<MyStore/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
