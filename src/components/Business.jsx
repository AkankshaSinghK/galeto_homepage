import React from "react";

const Business = () => {
  return (
    <div
    className="container-fluid my-5"
    style={{ backgroundColor: "#faf6ef"}}
  >
     <div className="container p-5">
      <div className="row align-items-center">
        {/* Left Side - Text Content */}
        <div className="col-md-6">
          <p className=" fs-4 fs-4 text-dark">For print on demand sellers</p>
          <h1 className="display-4 fw-bold mb-5">
            Accelerate business growth with innovative design tools and apps
          </h1>
          <p className=" fs-4 fw-bold">
            See how our cutting-edge solutions can help you reach new customers
            and maximize your profits.
          </p>

          <div className="mt-4">
            <button className="btn btn-dark btn-lg me-3 rounded-pill">
              Get started
            </button>
          </div>
        </div>

        {/* Right Side - Image Grid */}
        <div className="col-md-6 d-flex justify-content-center">
          <div className="d-flex flex-wrap" >
            <img
              src="./assets/download.gif"
              alt="T-shirt"
              className="img-fluid p-2"
              style={{ width: "600px", height: "600px", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
   
  );
};

export default Business;
