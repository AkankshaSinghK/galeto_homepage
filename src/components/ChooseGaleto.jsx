import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ChooseGelato = () => {
  return (
    <div className="container my-5">
        <h2 className="fw-bold text-center mb-5 display-4">Why choose Gelato</h2>
      <div className="row align-items-center">
        {/* Left Side - Image Section */}
        <div className="col-md-6">
          <div className="position-relative">
            {/* Replace with your image */}
            <img
              src="./assets/download (2).webp"
              alt="Why Gelato"
              className="img-fluid "
              style={{ maxHeight: '550px',
                width: '600px'

               }}
            />
           
          </div>
        </div>

        {/* Right Side - Text Section */}
        <div className="col-md-6">
          
          <ul className="list-unstyled mt-4">
            <li className="mb-3">
              <span className=" fs-4">▻ World’s largest print-on-demand network</span>
              <br />
              140+ print partners in 32 countries. Gelato is a truly global service.
            </li>
            <li className="mb-3">
              <span className="fs-4
              ">▻ Sell globally, produce locally</span>
              <br />
              Your products are produced close to your customers, wherever they are.
            </li>
            <li className="mb-3">
              <span className="fs-4
              ">▻ 100% free editing tools</span>
              <br />
              Create your custom products using our suite of  <a href="#" className="text-decoration-underline text-black">free tools.</a>
              
            </li>
            <li className="mb-3">
              <span className="fs-4
              ">▻ 60+ logistics partners</span>
              <br />
              Our global network of logistics partners ensures your products are delivered fast.
            </li>
            <li className="mb-3">
              <span className="fs-4
              ">▻ High-quality products</span>
              <br />
              We partner with the world’s leading brands to ensure the best quality products.
            </li>
            <li className="mb-3">
              <span className="fs-4
              ">▻ Endless creativity with Shutterstock Images</span>
              <br />
              Access millions of images and graphics to create unique products you can sell in your store.
            </li>
            <li className="mb-3">
              <span className="fs-4
              ">▻ 1-click integration to the leading ecommerce platforms</span>
              <br />
              Connect your store to Gelato using <a href="#" className="text-decoration-underline text-black">our integrations</a> with <a href="#" className="text-decoration-underline text-black">Shopify, Etsy</a> and more.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChooseGelato;
