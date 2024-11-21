import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPhone,
  faBlog,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png"
          alt=""
        />
      </div>
      <input
        type="search"
        placeholder="Search Your Answers Here..."
        className="search-bar"
      />
      <img
        src="StackOverflow\assets\search_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png"
        alt=""
        className="search-icon"
      />
      <div className="product">
        <p>Products</p>
      </div>
      <nav className="nav-icons">
        <a href="#home" className="icon-link">
          <FontAwesomeIcon icon={faHome} title="Home" />
        </a>
        <a href="#contact" className="icon-link">
          <FontAwesomeIcon icon={faPhone} title="Contact" />
        </a>
        <a href="#blogs" className="icon-link">
          <FontAwesomeIcon icon={faBlog} title="Blogs" />
        </a>
        <a href="#comments" className="icon-link">
          <FontAwesomeIcon icon={faComment} title="Comments" />
        </a>
      </nav>
    </header>
  );
}

export default Header;
