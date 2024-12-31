import React from "react";
import './Footer.css'
export default function Footer() {
  return (
    <>
      <div className="container-fluid pt-5" id="footer-cf">
        <div className="py-5">
          <div className="col text-center">
            <a href="/" className="px-3 py-2 mx-2 bg-primary">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="/" className="px-3 py-2 mx-2 bg-primary">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="/" className="px-3 py-2 mx-2 bg-primary">
              <i class="fa-solid fa-globe"></i>
            </a>
            <a href="/" className="px-3 py-2 mx-2 bg-primary">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <hr />
            <div className="col">
              <p>
                <b className="text-white">
                  All Rights Reserved © - 2024 By Eco<span>Connection</span>
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
