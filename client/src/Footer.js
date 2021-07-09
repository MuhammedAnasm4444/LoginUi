import React from "react";

function Footer() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="mx-auto row">
            <h2 className="title">Fancoveo</h2>
            <div className=" ml-5">
                <ul className="row ml-5 mt-1">
                    <li className="ml-4 "><small className="foot-text">How Fanconvo Works</small></li>
                    <li className="ml-4 "><small className="foot-text">Terms of Use</small></li>
                    <li className="ml-4"><small className="foot-text">Contact Us</small></li>
                </ul>
            </div> 
          {/* <div className="row">
            <p className="text-white">Sign up</p>
            <p className="text-white ml-2">Login</p>
          </div> */}
        </div>

      </div>
      <div className="row">
          <p className="mx-auto">© 2021 Fanconvo</p>
      </div>
    </div>
  );
}

export default Footer;
