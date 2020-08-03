import React, { useState, useEffect } from "react";
import "./styles.css";
import { Button } from "@material-ui/core";
import Menu from "@material-ui/icons/MenuRounded";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import logoWady from "../../assets/images/logoWady.svg";
import biografia from "../../assets/images/biografia.svg";
import fotoWady from "../../assets/images/fotoWady.svg";
import planoGestao from "../../assets/images/planoGestao.svg";
import lema from "../../assets/images/lema.svg";
import souApoiadorIcon from "../../assets/images/souWady.svg";
import conquistas from "../../assets/images/conquistas.svg";
import facebookIcon from "../../assets/images/facebookIcon.svg";
import instagramIcon from "../../assets/images/instagramIcon.svg";
import backgroundHome from "../../assets/images/backgroundHome.svg";
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
    <div id="root">
      <div className="main">
        <header>
          {isMobile ? (
            <MenuMobile>
              <div className="menuItems">
                <Button>
                  <a>INÍCIO</a>
                </Button>
                <Button>
                  <a>PROPOSTAS</a>
                </Button>
                <Button>
                  <a>QUEM SOU</a>
                </Button>
                <Button>
                  <a>CONQUISTAS</a>
                </Button>
              </div>
              <div className="socialNetworks">
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
                  <a>INÍCIO</a>
                  <a>PROPOSTAS</a>
                  <a>QUEM SOU</a>
                  <a>CONQUISTAS</a>
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
        <div className="content">
          <section id="noBorderSection">
            <img id="backgroundHome" src={backgroundHome} />
            <div className="contentSection">
              <div className="leftContent">
                <img src={lema} id="lema" />
              </div>
              <div className="rightContent">
                <img src={fotoWady} id="fotoWady" />
              </div>
            </div>
          </section>
          <section id="sectionGreen">
            <div className="contentSection">
              <div className="souApoiadorContent">
                <img id="souApoiadorIcon" src={souApoiadorIcon} />
                <div className="souApoiadorContentLeft">
                  <h2>
                    Customize suas fotos para redes sociais mostrando o seu
                    apoio!
                  </h2>
                  <Button
                    id="souApoiadorButton"
                    href="https://souapoiador.com.br/professorwady"
                  >
                    ACESSAR
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section id="sectionWhite">
            <div className="contentSection">
              <div className="rightContent">
                <img src={biografia} id="fotoWady" />
              </div>
              <div className="leftContent">
                <h1>Professor Wady</h1>
                <div>
                  <h3>
                    O professor Wady Lima Castro Junior (Professor Wady), é
                    natural da cidade de Bom Jesus-PI. Filho de Wady Lima Castro
                    (In memoriam) e Maria Neli Castro. É casado com a Professora
                    Maria Christina Ferreira de Oliveira Castro, com quem tem 03
                    (três) filhos. Formado em Engenharia Agronômica pela
                    Universidade de Brasília, Especialista em PROEJA (IFPI),
                    Mestre em Agronegócios (UnB) e Doutor em Engenharia Agrícola
                    (UFV), ingressou, em 02 de fevereiro de 2006, no Serviço
                    Público Federal, ocupando o cargo de Professor de 1º e 2º
                    Grau pela extinta Escola Agrotécnica Federal de Codó- MA.
                    Instituição essa que se integrou ao Instituto Federal de
                    Educação, Ciência e Tecnologia do Maranhão- IFMA no ano de
                    2008. A partir de então, a extinta Escola Agrotécnica
                    Federal de Codó- MA passa a ser chamada IFMA- Campus Codó.
                  </h3>
                </div>
                <Button id="knowMoreButton">Saiba Mais</Button>
              </div>
            </div>
          </section>
          <section>
            <div className="contentSection">
              <div className="leftContent">
                <h1>Plano de Gestão</h1>
                <div>
                  <h3>
                    O objetivo maior das nossas propostas norteadoras é
                    proporcionar uma gestão que estimule a participação da
                    comunidade acadêmica e possua abertura para o diálogo com
                    todos os segmentos. Durante esse processo, nosso plano
                    estará aberto para contribuições, reflexões e mudanças.
                  </h3>
                </div>
                <Button id="knowMoreButton">Confira</Button>
              </div>
              <div className="rightContent">
                <img src={planoGestao} id="fotoWady" />
              </div>
            </div>
          </section>
          <section id="sectionWhite">
            <div className="contentSection">
              <div className="rightContent">
                <img src={conquistas} id="fotoWady" />
              </div>
              <div className="leftContent">
                <h1>Conquistas</h1>
                <div>
                  <h3>
                    O professor Wady Lima Castro Junior (Professor Wady), é
                    natural da cidade de Bom Jesus-PI. Filho de Wady Lima Castro
                    (In memoriam) e Maria Neli Castro. É casado com a Professora
                    Maria Christina Ferreira de Oliveira Castro, com quem tem 03
                    (três) filhos. Formado em Engenharia Agronômica pela
                    Universidade de Brasília, Especialista em PROEJA (IFPI),
                    Mestre em Agronegócios (UnB) e Doutor em Engenharia Agrícola
                    (UFV), ingressou, em 02 de fevereiro de 2006, no Serviço
                    Público Federal, ocupando o cargo de Professor de 1º e 2º
                    Grau pela extinta Escola Agrotécnica Federal de Codó- MA.
                    Instituição essa que se integrou ao Instituto Federal de
                    Educação, Ciência e Tecnologia do Maranhão- IFMA no ano de
                    2008. A partir de então, a extinta Escola Agrotécnica
                    Federal de Codó- MA passa a ser chamada IFMA- Campus Codó.
                  </h3>
                </div>
                <Button id="knowMoreButton">Saiba Mais</Button>
              </div>
            </div>
          </section>
        </div>
        <footer></footer>
      </div>
    </div>
  );
}
