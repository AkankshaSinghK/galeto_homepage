import React from 'react'

const DropdownHeader = () => {
  return (
    <div className="container-fluid sticky"  style={{ backgroundColor: "#fff"}}>
   <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            <ul className="navbar-nav ">
              {/* Products Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-black"
                  href="#"
                  id="navbarDropdownProducts"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownProducts">
                  <li><a className="dropdown-item" href="#">Best Sellers</a></li>
                  <li><a className="dropdown-item" href="#">Mens Clothing</a></li>
                  <li><a className="dropdown-item" href="#">Womens Clothing</a></li>
                  <li><a className="dropdown-item" href="#">Wall Arts</a></li>
                  <li><a className="dropdown-item" href="#">Calendars</a></li>
                  <li><a className="dropdown-item" href="#">Cards</a></li>
                </ul>
              </li>
    
              {/* Start Selling Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-black"
                  href="#"
                  id="navbarDropdownSelling"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Start selling
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownSelling">
                  <li><a className="dropdown-item" href="#">Print on Demand </a></li>
                  <li><a className="dropdown-item" href="#">Setup your Business</a></li>
                  <li><a className="dropdown-item" href="#">Sell custom Products</a></li>
                  <li><a className="dropdown-item" href="#">Integrations</a></li>
                  <li><a className="dropdown-item" href="#">Partner Services</a></li>
                  <li><a className="dropdown-item" href="#">Move your products</a></li>
                </ul>
              </li>
    
              {/* Tools and Apps Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-black"
                  href="#"
                  id="navbarDropdownTools"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tools and apps
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownTools">
                  <li><a className="dropdown-item" href="#">API Integration</a></li>
                  <li><a className="dropdown-item" href="#">Plugins</a></li>
                  <li><a className="dropdown-item" href="#">Mobile Apps</a></li>
                </ul>
              </li>
    
              {/* Pricing */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-black" href="#"
                id="navbarDropdownTools"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                  Pricing
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownTools">
                  <li><a className="dropdown-item" href="#">API Integration</a></li>
                  <li><a className="dropdown-item" href="#">Plugins</a></li>
                  <li><a className="dropdown-item" href="#">Mobile Apps</a></li>
                </ul>
              </li>
    
              {/* Resources Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-black"
                  href="#"
                  id="navbarDropdownResources"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownResources">
                  <li><a className="dropdown-item" href="#">Blog</a></li>
                  <li><a className="dropdown-item" href="#">Guides</a></li>
                  <li><a className="dropdown-item" href="#">Support</a></li>
                </ul>
              </li>
    
              {/* Pro sellers */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-black" href="#"
                id="navbarDropdownResources"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                  Pro sellers
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownTools">
                  <li><a className="dropdown-item" href="#">API Integration</a></li>
                  <li><a className="dropdown-item" href="#">Plugins</a></li>
                  <li><a className="dropdown-item" href="#">Mobile Apps</a></li>
                </ul>
              </li>
    
              {/* GelatoConnect Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-black"
                  href="#"
                  id="navbarDropdownGelatoConnect"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  GelatoConnect
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownGelatoConnect">
                  <li><a className="dropdown-item" href="#">Overview</a></li>
                  <li><a className="dropdown-item" href="#">API Documentation</a></li>
                  <li><a className="dropdown-item" href="#">Partners</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        </div>
        <hr className="bg-secondary" />
   </div>
        
      
    
  )
}

export default DropdownHeader