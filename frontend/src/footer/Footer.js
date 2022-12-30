import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h2>NR shopping</h2>
            
        <hr />
            <h4 className="list-unstyled">
                <p>project ecommerce from gomycode for bought products</p>
            </h4>
          </div>
          {/* Column2 */}
          <div className="col">
          <h2>Products</h2>
          
        <hr />
            <ui className="list-unstyled">
            <Link className="linked"  to='/'><li>Product page</li></Link>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
          <h2>Services</h2>
          
        <hr />
            <ui className="list-unstyled">
            <Link className="linked" to='/signin'><li>Sign in</li></Link>
            <Link className="linked" to='/signup'><li>Sign up</li></Link>
            <Link className="linked" to='/about'><li>About</li></Link>
            <Link className="linked" to='/beseller'><li>Be seller</li></Link>
            </ui>
          </div>
          {/* Column4 */}
          <div className="col">
          <h2>Contact</h2>
          
        <hr />
            <ui className="list-unstyled">
              <li>Tunis, Tunisia</li>
              <li>r.nidhal97@outlook.fr</li>
              <li>53416956</li>
              <li>58061503</li>
            </ui>
          </div>
        </div>
        
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Nidhal Rebhi | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;