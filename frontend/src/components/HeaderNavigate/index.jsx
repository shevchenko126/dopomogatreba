import React from "react";

import "./HeaderNavigate.css";
import Dropdown from "./Dropdown/index";

const categoryArray = [
  "All Category",
  "Mobile Phone",
  "Electronics",
  "Car",
  "Vehicle",
  "Property",
  "Home & Living",
  "Essentials",
  "Business & Industry",
  "Agriculture",
];
const HeaderNavigate = () => {
  return (
    <div className="root-headerNavigate">
      <div className="headerNavigate container-xl">
        <div className="row align-items-center ">
          <div className="col-xs-12 col-sm-12 col-xl-2 headerNavigate__dropdown">
            <Dropdown array={categoryArray} />
          </div>
          <div className="col-xs-12 col-sm-12 col-xl-9 headerNavigate-category__links">
            {categoryArray.map((category) => (
              <a
                className="headerNavigate-category-links__link"
                key={category}
                href={category}
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavigate;
