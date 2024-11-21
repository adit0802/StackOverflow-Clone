import React, { useState } from "react";
import "./LeftSidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPhone,
  faBlog,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const LeftSidebar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (index) => {
    setActiveItem(index);
  };

  const items = [
    { id: 1, label: "Home", icon: faHome },
    { id: 2, label: "About" },
    { id: 3, label: "Services" },
    { id: 4, label: "Public" },
    { id: 5, label: "Questions" },
    { id: 6, label: "Tags" },
    { id: 7, label: "Users" },
  ];

  return (
    <div className="left-sidebar">
      <ul>
        {items.map((item, index) => (
          <li
            key={item.id}
            className={`list ${activeItem === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            {item.label}
            <div className="sty"></div> {/* Visible only for active item */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;
