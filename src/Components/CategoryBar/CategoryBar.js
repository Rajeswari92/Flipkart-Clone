import React from "react";
import "./Category.css";
const CategoryBar = ({ Imgsrc, CategoryName }) => {
  return (
    <div className="CategoryBar">
      <div className="categoryBar-Img">
        <img src={Imgsrc} alt="CategoryImg" />
      </div>
      <p className="CategoryBar-name">{CategoryName}</p>
    </div>
  );
};

export default CategoryBar;
