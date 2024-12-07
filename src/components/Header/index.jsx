import React from "react";
import './style.css';

export default function Header() {
  return (
    <header id="header">
      {/* This is my site header component. */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex flex-row justify-content-between w-auto">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav home-nav">
              <li className="nav-item me-3">
                <a className="nav-link active btn btn-sm" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item me-3">
                <a className="nav-link" href="#projects">
                  Project
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skill">
                  Skill
                </a>
              </li>
            </ul>
      
      </div>
      </div>
      </nav>
    </header>
  );
}
