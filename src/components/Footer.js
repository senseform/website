import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <section className="section footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h6>Company Information</h6>
            <hr />
            <p>
              jfjsdafn adfj ashd fhasd jfh sdha fahs dfhsadh faasdfhjasdh flksda
              sdnajkfbajksdbfkjasdfjkasdf asdnjfbasjkdfbasd jasdbfjkbsad
              dkjsfbasd
            </p>
          </div>

          <div className="col-md-4">
            <h6>Quick Links</h6>
            <hr />
            <div><Link to="/">Home</Link></div>
            <div><Link to="/about">About us</Link></div>
            <div><Link to="/contact">Contact us</Link></div>
            <div><Link to="/news">News</Link></div>
          </div>

          <div className="col-md-4">
            <h6>Contact Information</h6>
            <hr />
            <div>
            <p className="text-white mb-1">#64, MBP Thane , Mumbai India</p>
            </div>
            <div>
            <p className="text-white mb-1">+91 ##########</p>
            </div>
            <div>
            <p className="text-white mb-1">+91 ##########</p>
            </div>
            <div>
            <p className="text-white mb-1">infor@senseform.com</p>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};
