import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "../../components/Header";
import educacao from "../../assets/images/ensino.svg";
import pesquisa from "../../assets/images/pesquisa.svg";
import extensao from "../../assets/images/extensao.svg";
import assistencia from "../../assets/images/assistencia.svg";
import administracao from "../../assets/images/administracao.svg";
import infraestrutura from "../../assets/images/infraestrutura.svg";
import comunicacao from "../../assets/images/comunicacao.svg";
export default function Biografia() {
  return (
    <div id="root">
      <div className="main">
        <Header />
        <div className="content">
          <section className="sectionPageTitle">
            <div className="contentSectionPageTitle">
              <h1>BIOGRAFIA</h1>
            </div>
          </section>
        </div>
      </div>
      <footer>
        <h1>©Copyright 2020 - Todos os direitos reservados</h1>
      </footer>
    </div>
  );
}
