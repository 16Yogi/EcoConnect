import React, { useState, useEffect } from "react";
import './Header.css';
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [user, setUser] = useState(null); // Store user data
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in (for example, check localStorage)
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogout = () => {
    // Clear user data and log them out
    localStorage.removeItem('user');
    setUser(null); // Reset user state
    navigate('/'); // Redirect to home or login page
  };

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
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                {/* If user is logged in, show the username and logout button */}
                {user ? (
                  <>
                    <span className="navbar-text mx-2">Welcome, {user.name}</span>
                    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                  </>
                ) : (
                  <>
                    <Link to="/registration" className="mx-1 nav-link">Registration</Link>
                    <Link to="/login" className="mx-1 nav-link">Login</Link>
                  </>
                )}
              </form>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
