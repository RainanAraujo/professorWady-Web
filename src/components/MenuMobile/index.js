import React, { useState, useEffect, createRef } from "react";
import "./styles.css";
import { Button } from "@material-ui/core";
import Menu from "@material-ui/icons/MenuRounded";
import logoWady from "../../assets/images/logoWady.svg";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
export default function MenuMobile({ children }) {
  const wrapperRef = createRef();
  const HandleClick = () => {
    wrapperRef.current.classList.toggle("menuShow");
  };
  const MenuShow = () => {
    return (
      <div ref={wrapperRef} className="menuClose">
        <div className="closeMenu">
          <Button onClick={() => HandleClick()}>
            <CloseRoundedIcon id="menuCloseIcon" />
          </Button>
        </div>
        {children}
      </div>
    );
  };

  return (
    <>
      <MenuShow />
      <div className="menuMobile">
        <img src={logoWady} id="logo" />
        <Button onClick={() => HandleClick()}>
          <Menu id="menuMobileIcon" />
        </Button>
      </div>
    </>
  );
}
