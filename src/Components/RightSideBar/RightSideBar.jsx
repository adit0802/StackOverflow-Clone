import React from "react";
import "./RightSideBar.css";

const RightSideBar = () => {
  return (
    <div className="blog-section">
      <h3>The Overflow Blog</h3>
      <ul>
        <li>The unexpected benefits of mentoring others</li>
        <li>Podcast 534: Building for AR with Niantic Labs</li>
      </ul>
      <h3>Featured & Meta</h3>
      <ul>
        <li>Beta release of Collectives™ on Stack Overflow</li>
      </ul>
      <h3>Hot Meta Post</h3>
      <ul>
        <li>Bugs that don’t disappear to be redundant</li>
        <li>Ambiguous tags (no containers)</li>
      </ul>
    </div>
  );
};

export default RightSideBar;
