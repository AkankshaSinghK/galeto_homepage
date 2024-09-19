import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  return (
    <div className="container p-5">
      <div className="row align-items-center">
        {/* Left Side - Text Content */}
        <div className="col-md-6">
          <h1 className="display-4 fw-bold">
            Print on demand for your ecommerce business
          </h1>
          <p className="lead fs-4 fw-bold">
            Sign up for free and only pay for what you sell.
          </p>
          <p className="lead">
  Turn your passion into profit with the world's largest{" "}
  <a href="#" className="text-decoration-underline text-black">print on demand</a> network.
</p>
          <div className="mt-4">
            <button className="btn btn-dark btn-lg me-3 rounded-pill">
              Get started for free
            </button>
            <button className="btn btn-outline-dark btn-lg rounded-pill">
              See our products
            </button>
          </div>
          {/* Shopify review section */}
          <div className="mt-4 align-items-center">
            <img
              src="./assets/shopify_monotone_black.svg"
              alt="Shopify"
              className="img-fluid mb-2 d"
              style={{ width: '150px',
                height: '50px'
               }}
            />
            <div >
              <div className="d-flex align-items-center fs-5">
                <span className=" mb-2">
                <i class="bi bi-star-fill me-1 text-success"></i>
                <i class="bi bi-star-fill me-1 text-success"></i>
                <i class="bi bi-star-fill me-1 text-success"></i>
                <i class="bi bi-star-fill me-1 text-success"></i>
                <i class="bi bi-star-fill text-success"></i>
                <span className="ms-2 ">4.8 / 5</span>
                </span>
                
              </div>
              <span>based on 910 reviews</span>
            </div>
          </div>
        </div>

        {/* Right Side - Image Grid */}
        <div className="col-md-6 d-flex justify-content-center">
          <div className="d-flex flex-wrap" >
            <img
              src="./assets/download (3).webp"
              alt="T-shirt"
              className="img-fluid p-2"
              style={{ width: '600px', height: '600px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
