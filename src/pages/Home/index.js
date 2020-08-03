import React, { useState, useEffect } from "react";
import "./styles.css";
import { Button } from "@material-ui/core";
import biografia from "../../assets/images/biografia.svg";
import fotoWady from "../../assets/images/fotoWady.svg";
import planoGestao from "../../assets/images/planoGestao.svg";
import lema from "../../assets/images/lema.svg";
import souApoiadorIcon from "../../assets/images/souWady.svg";
import conquistas from "../../assets/images/conquistas.svg";
import backgroundHome from "../../assets/images/backgroundHome.svg";
import Header from "../../components/Header";

export default function Home() {
  return (
    <div id="root">
      <div className="main">
        <Header />
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
          {/*} <section id="sectionWhite">
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
  </section>{*/}
        </div>
        <footer>
          <h1>©Copyright 2020 - Todos os direitos reservados</h1>
        </footer>
      </div>
    </div>
  );
}
