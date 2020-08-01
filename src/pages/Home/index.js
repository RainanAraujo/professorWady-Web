import React, { useState, useEffect } from "react";
import "./styles.css";
import Menu from "@material-ui/icons/MenuRounded";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import logoWady from "../../assets/images/logoWady.svg";
import fotoWady from "../../assets/images/fotoWady.svg";
import lancamento from "../../assets/images/lancamento.svg";
import facebookIcon from "../../assets/images/facebookIcon.svg";
import instagramIcon from "../../assets/images/instagramIcon.svg";
import backgroundHome from "../../assets/images/backgroundHome.svg";
export default function Home() {
  const [isMobile, setMobile] = useState();
  useEffect(() => {
    if (window.screen.width < 600) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);
  return (
    <div id="root">
      <div className="main">
        <img src={backgroundHome} id="backgroundHome" />
        <header>
          {isMobile ? (
            <>
              <button className="menuMobile">
                <Menu id="menuMobileIcon" />
              </button>
            </>
          ) : (
            <>
              <div></div>
              <div className="socialNetworks">
                <button id="iconButton">
                  <img src={facebookIcon} />
                </button>
                <button id="iconButton">
                  <img src={instagramIcon} />
                </button>
                <button id="zap">
                  CHAMA NO ZAP
                  <WhatsAppIcon id="whatsAppIcon" />
                </button>
              </div>
            </>
          )}
        </header>
        <div className="content">
          <div className="leftContent">
            <img src={logoWady} id="logo" />
            <img src={lancamento} id="lancamento" />
            {/*}<button id="buttonAccess" onclick="window.location.href='#'">
              Faça sua campanha
  </button>{*/}
          </div>
          <div className="rightContent">
            <img src={fotoWady} id="fotoWady" />
          </div>
        </div>
      </div>
    </div>
  );
}
