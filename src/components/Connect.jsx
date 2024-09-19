import React from "react";

const Connect = () => {
  return (
    
     <div className="container p-5">
      <div className="row align-items-center">
      <div className="col-md-6 d-flex ">
          <div className="d-flex flex-wrap" >
            <img
              src="./assets/download (1).gif"
              alt="T-shirt"
              className="img-fluid p-2"
              style={{ width: "600px", height: "100%", objectFit: "contain" }}
            />
          </div>
        </div>
        {/* Left Side - Text Content */}
        <div className="col-md-6">
          <p className=" fs-4 fs-4 text-dark">For print producers</p>
          <h1 className="display-4 fw-bold mb-5">
          GelatoConnect
          </h1>
          <p className=" fs-4 fw-bold">
          Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution for the print industry
          </p>

          <div className="mt-4">
            <button className="btn btn-dark btn-lg me-3 rounded-pill">
              Learn more
            </button>
          </div>
        </div>

      
        
      </div>
    </div>
  
   
  );
};

export default Connect;
