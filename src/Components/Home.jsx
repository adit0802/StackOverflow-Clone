import React from "react";
import Header from "./Header/Header";
import QuestionList from "./QuestionList/QuestionList";
import BlogSection from "./BlogSection";
import LeftSidebar from "./LeftSideBar/LeftSideBar";
import RightSideBar from "./RightSideBar/RightSideBar";

function Home() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="left-sidebar">
          <LeftSidebar />
        </div>
        <div className="questions-section">
          <QuestionList />
        </div>
        <div className="sidebar">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}

export default Home;
