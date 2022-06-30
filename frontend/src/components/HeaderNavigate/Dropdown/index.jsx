import React, { useState } from "react";
import "./Dropdown.css";

import arrowDown from "../../../access/icons/CaretDown.svg";

const Dropdown = ({ array }) => {
  const category = array;
  const [isActive, setIsActive] = useState(false);
  const [isCategory, isSetCategory] = useState(category[0]);
  return (
    <div className="dropdown">
      <div
        className="dropdown-block__btn"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="dropdown-btn">{isCategory}</div>
        <img src={arrowDown} alt="arrowDown" />
      </div>
      {isActive && (
        <div className="dropdown__content">
          {category.map((item, i) => (
            <div
              key={i}
              className="dropdown-content__item"
              onClick={() => {
                isSetCategory(item);
                setIsActive(false);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
