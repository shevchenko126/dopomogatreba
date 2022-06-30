import React from "react";

import "./Header.css";
import logo from "../../access/icons/Logo.png";
import search from "../../access/icons/fi_search.svg";
import plusCircle from "../../access/icons/PlusCircle.svg";
const Header = () => {
  return (
    <div className="root-header">
      <div className="header  container-xl">
        <div className="row gy-3 gx-3 align-items-center ">
          <div className="col-xs-12 col-sm-6 col-xl-4  ">
            <div className=" header__logo">
              <img className="header-logo__img" src={logo} alt="logo" />
              <div className="header-logo__title">Onest</div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-xl-4 ">
            <div className="header__search ">
              <img className="header-search__img" src={search} alt="search" />
              <input
                className="header-search__input"
                placeholder={"Ads tittle, keyword..."}
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-xl-4">
            <div className="header__buttons">
              <div className="header-buttons__signIn">
                <button className="header-buttons-signIn__button">
                  Sigh In
                </button>
              </div>
              <div className="header-buttons__postAds">
                <img
                  className="header-buttons-postAds__img"
                  src={plusCircle}
                  alt="plusCircle"
                />
                <button className="header-buttons-postAds__button">
                  Post Ads
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
