import React from "react";
import HeaderSearch from "./HeaderSearch";
import ButtonSignIn from "./HeaderButtons/ButtonSignIn";
import ButtonPostAds from "./HeaderButtons/ButtonPostAds";

const HeaderContentBlock = ({ desktopClassName }) => {
  return (
    <>
      <HeaderSearch desktopClassName={desktopClassName} />
      <div
        className={`col-xs-12 col-sm-12 col-xl-4 header-content-block ${desktopClassName}`}
      >
        <div className="header__buttons">
          <ButtonSignIn />
          <ButtonPostAds />
        </div>
      </div>
    </>
  );
};

export default HeaderContentBlock;
