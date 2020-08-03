import React, { useState, useEffect } from "react";
import "./styles.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import logoWady from "../../assets/images/logoWady.svg";
import facebookIcon from "../../assets/images/facebookIcon.svg";
import instagramIcon from "../../assets/images/instagramIcon.svg";
import MenuMobile from "../../components/MenuMobile";
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
    <header>
      {isMobile ? (
        <MenuMobile>
          <div className="menuItems">
            <Button>
              <Link to="/">INÍCIO</Link>
            </Button>
            <Button>
              <Link to="/propostas">PROPOSTAS</Link>
            </Button>
            <Button>
              <Link to="/biografia">
                <a>QUEM SOU</a>
              </Link>
            </Button>
          </div>
          <div className="socialNetworks" style={{ marginTop: 20 }}>
            <div>
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
            </div>

            <Button
              style={{ marginTop: 30 }}
              id="zap"
              href={"https://api.whatsapp.com/send?phone=559981657105"}
            >
              CHAMA NO ZAP
              <WhatsAppIcon id="whatsAppIcon" />
            </Button>
          </div>
        </MenuMobile>
      ) : (
        <div className="mainHeaderDesktop">
          <img src={logoWady} id="logo" />
          <div className="rightHeaderItems">
            <div className="menuItems">
              <Link to="/">INÍCIO</Link>
              <Link to="/propostas">PROPOSTAS</Link>

              <Link to="/biografia">QUEM SOU</Link>
            </div>
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
          </div>
        </div>
      )}
    </header>
  );
}
