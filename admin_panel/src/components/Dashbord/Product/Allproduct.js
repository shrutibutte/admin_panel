import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar";

function Allproduct() {
  const [allproduct, setallprocut] = useState({});
  const token = localStorage.getItem("token");
  console.log(token);
  useEffect(() => {
    const getallproduct = async () => {
      const res = await fetch("http://localhost:5000/api/getproduct", {
        headers: {
          "Allow-Cross-Origin": "*",
          token: "bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setallprocut(data);
    };
    getallproduct();
  }, []);
  console.log(allproduct);
  return (
    <div>
      <h1>All Product</h1>
      <Sidebar>
        <div className="container w-50 mx-auto ">
          <div className="row ">
            <div className="col-md-12">
              {/* make card to show product data  */}
              <div className="col-3"></div>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
}

export default Allproduct;
