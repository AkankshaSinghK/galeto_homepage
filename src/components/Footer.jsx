import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-5">
      <div className="container">
        {/* First Row: Logo and Social Media */}
        <div className="row mb-4">
          <div className="col-md-6 d-flex align-items-center">
            {/* <h5 className="mb-0">
              <i className="bi bi-gem me-2"></i>Gelato
              
            </h5> */}
             <img
            src="./assets/_logo.svg"
            alt="Gelato Logo"
            style={{ height: "30px", marginRight: "10px" }}
          />
          </div>
          <div className="col-md-6  d-flex justify-content-end">
            <h6 className="text-white me-5">Find Galeto on: </h6>
            <a href="#" className="text-white me-3">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-white me-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-white me-3">
              <i className="bi bi-tiktok"></i>
            </a>
            <a href="#" className="text-white me-3">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" className="text-white">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>

        {/* Second Row: Footer Content */}
        <div className="row">
          {/* Logo and Description */}
          <div className="col-md-4 mb-4">
            <p>
              Gelato has created the world's largest network for local
              production and distribution of customized products. Together we
              bring creativity to life - and into business.
            </p>
            <button className="btn btn-light rounded-pill mb-5">Get started</button>

            <h5>Get the app</h5>
            <div className="d-flex">
              <img
                src="./assets/badge-1.svg"
                alt="Google Play"
                className="me-2"
                style={{ width: "120px" }}
              />
              <img
                src="./assets/badge.svg"
                alt="App Store"
                style={{ width: "120px" }}
              />
            </div>
          </div>

         

          {/* Print on demand */}
          <div className="col-md-2 mb-4">
            <h4>Print on demand</h4>
            <ul className="list-unstyled">
              <li>What is print on demand?</li>
              <li>Product catalog</li>
              <li>Shipping and delivery</li>
              <li>Dropshipping products</li>
              <li>Pro sellers</li>
              <li>White label products</li>
              <li>Returns policy</li>
              <li>Global, yet local</li>
              <li>Sustainability</li>
              <li>Support</li>
            </ul>
          </div>

          {/* Integrations */}
          <div className="col-md-2 mb-4">
            <h4>Integrations</h4>
            <ul className="list-unstyled">
              <li>Shopify</li>
              <li>Etsy</li>
              <li>WooCommerce</li>
              <li>Wix</li>
              <li>Squarespace</li>
              <li>BigCommerce</li>
              <li>API</li>
            </ul>
          </div>

          {/* Start Selling */}
          <div className="col-md-2 mb-4">
            <h4>Start selling</h4>
            <ul className="list-unstyled">
              <li>Embroidery</li>
              <li>Print on demand t-shirts</li>
              <li>Print on demand hoodies</li>
              <li>Print on demand posters</li>
              <li>Print on demand canvas</li>
              <li>Print on demand calendars</li>
              <li>Print on demand mugs</li>
              <li>Custom products</li>
              <li>Custom clothing</li>
              <li>Custom merchandise</li>
              <li>Custom phone cases</li>
              <li>Print on demand Europe</li>
              <li>Print on demand UK</li>
              <li>Print on demand France</li>
              <li>Print on demand Canada</li>
              <li>Merch maker</li>
            </ul>
          </div>

          <div className="col-md-2 mb-4">
            <h4>Company</h4>
            <ul className="list-unstyled">
              <li>GelatoConnect</li>
              <li>About Galeto</li>
              <li>Leadership team</li>
              <li>Board & investors</li>
              <li>Newsroom</li>
              <li>Blog</li>
              <li>Customer Stories</li>
              <li>Partners</li>
              <li>Careers</li>
              <li>Affilliates program</li>
            </ul>
          </div>
        </div>

       

        {/* Bottom Row: Contact and Language Options */}
        <div className="row">
          <div className="col-md-6">
            <p className="mb-0">
              Contact us | Legal | Privacy policy | Cookie policy | Sitemap
            </p>
          </div>
          <div className="col-md-6 text-end mb-3">
            <button className="btn btn-outline-light  me-3"  style={{ borderWidth: '2px', borderColor: 'white' }}>
              English (India)
              <i className="bi bi-chevron-down mx-2" style={{color: 'white'}}></i>
            </button>
            <button className="btn btn-light rounded-pill sticky">
              <i className="bi bi-headset me-2"></i> Contact Us
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
