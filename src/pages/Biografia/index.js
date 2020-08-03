import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "../../components/Header";
import biografia from "../../assets/images/biografia.svg";
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
          <section>
            <div className="contentSectionSubPage">
              <div className="titleSection">
                <h1>Professor Wady Lima Castro Junior</h1>
                <img src={biografia} />
              </div>
              <h3>
                O professor Wady Lima Castro Junior (Professor Wady), é natural
                da cidade de Bom Jesus-PI. Filho de Wady Lima Castro (In
                memoriam) e Maria Neli Castro. É casado com a Professora Maria
                Christina Ferreira de Oliveira Castro, com quem tem 03 (três)
                filhos. Formado em Engenharia Agronômica pela Universidade de
                Brasília, Especialista em PROEJA (IFPI), Mestre em Agronegócios
                (UnB) e Doutor em Engenharia Agrícola (UFV), ingressou, em 02 de
                fevereiro de 2006, no Serviço Público Federal, ocupando o cargo
                de Professor de 1º e 2º Grau pela extinta Escola Agrotécnica
                Federal de Codó- MA. Instituição essa que se integrou ao
                Instituto Federal de Educação, Ciência e Tecnologia do Maranhão-
                IFMA no ano de 2008. A partir de então, a extinta Escola
                Agrotécnica Federal de Codó- MA passa a ser chamada IFMA- Campus
                Codó.
              </h3>
              <h3>
                Hoje, com 43 (quarenta e três) anos de vida e 14 (catorze) anos
                de efetivo exercício nesta instituição de ensino profissional e
                tecnológica, sempre colaborou em diversas funções
                pedagógico-administrativas, a qual destacamos a Coordenação
                Geral dos Cursos Superiores, onde contribuiu para a criação,
                implantação e aprovação dos cursos de graduação. Atualmente,
                mesmo como Diretor Geral do IFMA- Campus Codó, não deixou de
                exercer suas funções de professor onde continua a compartilhar,
                ensinar e aprender nos cursos técnicos, de graduação e
                pós-graduação, promovendo uma formação cidadã, envolvendo-se na
                pesquisa e projetos de extensão.
              </h3>
              <h3>
                Enquanto Diretor Geral do Campus Codó, buscou o fortalecimento
                de uma gestão participativa, e conseguiu a resiliência frente a
                um cenário desfavorável. Sobretudo frente aos severos cortes
                orçamentários que o Campus Codó vem sofrendo desde o inicio
                desta atual gestão. Contingenciamentos estes que criaram
                obstáculos para que fosse alcançada toda a execução do plano de
                Gestão 2016-2020; especialmente em que pese à infra-estrutura.
                Mas, contudo, ainda conseguiu avanços no ensino: - fortalecendo
                o PROEJA, criando o curso de Ciências Biológicas, duas
                pós-graduações lato sensu, aprovação de todos os cursos
                superiores e assim irá continuar a desenvolver o Campus Codó;
                principalmente com seu apoio.
              </h3>
              <h2 id="assinatura">
                <i>A educação segue em frente.</i>
              </h2>
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
