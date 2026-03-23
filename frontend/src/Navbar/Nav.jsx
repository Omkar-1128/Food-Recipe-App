import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Search from "./Search";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="row foodContainer">
            <div className="col-3">
              <Link to="/" className="navbar-brand">
                <img
                  className="Nav-Image"
                  src="/image.png"
                  alt="Logo Image"
                />
              </Link>
            </div>

            <div className="col-5">
                <Search />
            </div>

            <div className="col-4">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 navItems">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active" aria-current="page">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Fav" className="nav-link active" aria-current="page">
                      Favourites
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
