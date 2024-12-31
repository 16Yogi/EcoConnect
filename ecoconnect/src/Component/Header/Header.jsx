import React from "react";
import './Header.css'
export default function Header() {
  return (
    <>
      <div className="container-fluid bg-light mx-auto py-2" id="nav-cf">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand mt-2" href="/">
              <h2>Eco<span>Connect</span></h2>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <a href="/" className="mx-1 nav-link">Registration</a>
                <a href="/" className="mx-1 nav-link">Login</a>
                {/* <button
                  className="btn btn-info my-2 my-sm-0"
                  type="submit"
                >
                  <i className="fa-solid fa-user"></i> */}
                {/* </button> */}
              </form>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
