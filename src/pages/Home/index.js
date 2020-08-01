import React, { useState, useEffect } from "react";
import "./styles.css";
import { Button } from "@material-ui/core";
import Menu from "@material-ui/icons/MenuRounded";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import logoWady from "../../assets/images/logoWady.svg";
import fotoWady from "../../assets/images/fotoWady.svg";
import lancamento from "../../assets/images/lancamento.svg";
import facebookIcon from "../../assets/images/facebookIcon.svg";
import instagramIcon from "../../assets/images/instagramIcon.svg";
import backgroundHome from "../../assets/images/backgroundHome.svg";
export default function Home() {
  function LinkInstagram() {
    window.open("http://google.com", "_blank");
  }

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
        <div id="backgroundHome" />
        <header>
          {isMobile ? (
            <>
              {/*}
              <button className="menuMobile">
                 <Menu id="menuMobileIcon" />
              </button>{*/}
              <div className="socialNetworks">
                <Button
                  id="zap"
                  href={"https://api.whatsapp.com/send?phone=559981657105"}
                >
                  CHAMA NO ZAP
                  <WhatsAppIcon id="whatsAppIcon" />
                </Button>
              </div>
            </>
          ) : (
            <>
              <div></div>
              <div className="socialNetworks">
                <Button
                  id="iconButton"
                  href={"https://www.facebook.com/professorwady"}
                >
                  <img src={facebookIcon} />
                </Button>
                <Button
                  id="iconButton"
                  href={"https://www.instagram.com/professorwady/"}
                >
                  <img src={instagramIcon} />
                </Button>
                <Button
                  id="zap"
                  href={"https://api.whatsapp.com/send?phone=559981657105"}
                >
                  CHAMA NO ZAP
                  <WhatsAppIcon id="whatsAppIcon" />
                </Button>
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
