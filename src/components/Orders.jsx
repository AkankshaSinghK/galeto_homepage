import React from "react";

const Orders = () => {
  return (
    <div
      className="container-fluid my-5"
      style={{ backgroundColor: "#faf6ef", height: "100%" }}
    >
      <div className="container">
        <div className="row align-items-center p-4">
          <div className="col-md-4 text-center fs-3">
            90% <br></br>
            <span> of all orders are produced </span> <br></br>{" "}
            <span>locally</span>{" "}
          </div>
          <div className="col-md-4 text-center  fs-3">
            90% <br></br>
            <span> of orders arrive within 5 days </span> <br></br>{" "}
            <span>of ordering</span>{" "}
          </div>
          <div className="col-md-4 text-center  fs-3">
            140+ <br></br>
            <span> print providers across 32 </span> <br></br>{" "}
            <span>countries</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
