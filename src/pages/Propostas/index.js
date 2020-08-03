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
export default function Propostas() {
  return (
    <div id="root">
      <div className="main">
        <Header />
        <div className="content">
          <section className="sectionPageTitle">
            <div className="contentSectionPageTitle">
              <h1>PLANO DE GESTÃO</h1>
            </div>
          </section>
          <section>
            <div className="contentSectionSubPage">
              <div className="titleSection">
                <h1>Educação</h1>
                <img src={educacao} />
              </div>
              <h3>
                1. Garantir estrutura física e apoiar as organizações estudantis
                (Grêmio e os Centros acadêmicos);
              </h3>
              <h3>
                2. Estabelecer estratégia de permanência e êxito dos estudantes,
                melhorando o acompanhamento do processo ensino-aprendizagem por
                meio das ações de orientação educacional e didático-pedagógica;
              </h3>
              <h3>
                3. Estimular e apoiar o aumento da participação de estudantes
                nas diversas olimpíadas de conhecimento da formação geral,
                técnica e tecnológica;
              </h3>
              <h3>
                4. Manutenção dos convênios com instituições renomadas para
                possibilitar mobilidade acadêmica e execução de estágios
                curriculares e estabelecer mais parcerias entre escolas na
                região, outros Campi e instituições de ensino para promover
                compartilhamento e a troca de saberes e informações;
              </h3>
              <h3>
                5. Fortalecimento do Núcleo de Apoio a Pessoas com Necessidade
                Educacionais Especiais (NAPNE) e do Núcleo de Estudo
                Afro-Brasileiro e Indígena (NEABI), para a afirmação da inclusão
                e da diversidade no âmbito do IFMA-Campus Codó;
              </h3>
              <h3>
                6. Consolidar com o processo de consolidação e fortalecimento
                dos cursos técnicos, de graduação e pós-graduação a partir de um
                acompanhamento sistemático e de avaliação desses cursos;
              </h3>
              <h3>
                7. Incentivar a participação de professores e alunos em eventos
                técnico-científicos, bem como promover eventos no próprio de
                modo que abranjam as diversas áreas do conhecimento.
              </h3>
            </div>
          </section>
          <section>
            <div className="contentSectionSubPage">
              <div className="titleSection">
                <h1>Pesquisa</h1>
                <img src={pesquisa} />
              </div>
              <h3>
                1. Melhoria do apoio aos servidores pesquisadores garantindo
                espaço físico para execução e gestão dos projetos de pesquisa;
              </h3>
              <h3>
                2. Consolidação dos grupos de pesquisa existentes no campus e
                fomento a criação de outros;
              </h3>
              <h3>
                3. Criar de Comissão de Apoio à Captação de Recursos para
                facilitar a elaboração de projetos junto às agências de fomento
                para incentivar e auxiliar os pesquisadores a participarem de
                editais dos órgãos de fomento à pesquisa;
              </h3>
              <h3>
                4. Incentivar o incremento de bolsas de iniciação científica e
                inovação tecnológica (PIBID, PIBIC e RP) como forma de estimular
                a participação de estudantes, técnicos administrativos e
                professores;
              </h3>
              <h3>
                5. Incentivar a pesquisa aplicada com foco social, tecnológico e
                no desenvolvimento dos arranjos produtivos locais e regionais e
                sua a divulgação pelos pesquisadores do Campus na comunidade de
                Codó e da região;
              </h3>
              <h3>
                6. Manutenção, desenvolvimento e criação dos laboratórios de
                ensino e pesquisa;
              </h3>
              <h3>
                7. Trabalhar pela implementação de programa Pós-Graduação
                <i> strictu sensu</i> a nível de mestrado na área de Ciências
                Agrárias.
              </h3>
            </div>
          </section>
          <section>
            <div className="contentSectionSubPage">
              <div className="titleSection">
                <h1>Extensão</h1>
                <img src={extensao} />
              </div>
              <h3>
                1. Melhorar e incentivar o desenvolvimento de projetos de
                extensão no Campus, estimulando a participação de alunos,
                técnicos administrativos e professores;
              </h3>
              <h3>
                2. Implementar uma sistemática de acompanhamento de egressos em
                articulação com a PROEXT;
              </h3>
              <h3>
                3. Incentivar a maior participação da comunidade externa na
                Semana Tecnológica (SNCT) e nos eventos promovidos pelo campus;
              </h3>
              <h3>
                4. Estabelecer parcerias com a sociedade civil organizada e
                movimentos sociais;
              </h3>
              <h3>
                5. Promover de forma constante a divulgação das informações,
                eventos, pesquisas e demais atividades realizadas pelo Campus
                junto a comunidade externa;
              </h3>
              <h3>
                6. Promover a ampliação de alianças estratégicas com as
                instituições públicas e privadas, a fim de se realizarem
                projetos conjuntos que tragam benefícios tanto a nossa
                comunidade acadêmica quanto ao município e a região;
              </h3>
              <h3>
                7. Fomentar a criação de núcleos extensionistas: Núcleo de Arte
                e Cultura, Núcleo de Extensão e Prática Profissional e Núcleo de
                Pesquisa e Ensino de Línguas;
              </h3>
              <h3>
                8. Consolidar a integração do Campus com a comunidade externa e
                o segmento produtivo, incentivando o desenvolvimento de projetos
                de extensão com captação de recursos externos e a busca pela
                geração de benefícios para todos que integram a comunidade
                IFMA-Campus Codó.
              </h3>
            </div>
          </section>
          <section>
            <div className="contentSectionSubPage">
              <div className="titleSection">
                <h1>Assistência ao Educando</h1>
                <img src={assistencia} />
              </div>
              <h3>
                1. Propor ações de acompanhamento e assistência aos residentes,
                bem como melhorar as condições de lazer e permanência;
              </h3>
              <h3>
                2. Manter e ampliar a oferta das bolsas de moradia estudantil,
                participação de alunos em viagens técnicas, seminários,
                encontros de representação estudantil e outros
              </h3>
              <h3>
                3. Manter a oferta de alimentação gratuita a todos os alunos do
                IFMA-Campus Codó, transporte aos estudantes dos cursos técnicos
                e ajuda financeira ao estudante para o custeio do transporte
                escolar, bem como a oferta do auxílio fardamento a um maior
                número de alunos;
              </h3>
              <h3>
                4. Tornar mais efetivo o acompanhamento médico, odontológico,
                psicológico, nutricional e de assistência social a todos os
                alunos;
              </h3>
              <h3>
                5. Buscar estratégias para fortalecer o vínculo familiar e
                integrar pais e responsáveis no dia a dia da escola e da
                vivência escolar dos alunos;
              </h3>
              <h3>
                6. Ampliar a divulgação de informações sobre os editais anuais
                de bolsas da Assistência Estudantil e outros editais de
                interesse da comunidade IFMA-Campus Codó como os de monitoria;
              </h3>
              <h3>
                7. Continuar com o processo de valorização da modalidade PROEJA,
                promovendo sua participação nas atividades/eventos promovidos no
                Campus e realizando acompanhamento contínuo dos estudantes a fim
                de minimizar a ausência e desistência.
              </h3>
            </div>
          </section>
          <section>
            <div className="contentSectionSubPage">
              <div className="titleSection">
                <h1>Administração, finanças e gestão de pessoas</h1>
                <img src={administracao} />
              </div>
              <h3>
                1. Instituir agenda de reuniões junto aos setores com o objetivo
                de socialização, levantamento de necessidades, discussão e
                encaminhamento de soluções;
              </h3>
              <h3>2. Democratizar e discutir os investimentos do Campus;</h3>
              <h3>
                3. Continuar com a implementação do Plano de Ação Anual,
                recém-criado no Campus;
              </h3>
              <h3>4. Manter a elaboração do Relatório Anual de Gestão;</h3>
              <h3>
                5. Discutir e esclarecer as atribuições relativas aos cargos e
                funções dentro da construção do Regimento Interno do Campus;
              </h3>
              <h3>
                6. Transformar o Planejamento Operacional em uma ferramenta de
                gestão, possibilitando a sua execução, avaliação e prestação de
                contas de forma sistêmica, com a participação de toda a
                comunidade escolar;
              </h3>
              <h3>
                7. Elaborar o Plano Anual de Contratações - PAC, de acordo com
                as diretrizes previstas no Planejamento Operacional, de maneira
                que o mesmo retrate fielmente os anseios da comunidade escolar;
              </h3>
              <h3>
                8. Continuar com a divulgação das ações administrativas, de
                gestão de pessoas e de finanças, em consonância com o
                planejamento operacional, a toda a comunidade escolar;
              </h3>
              <h3>
                9. Desenvolver um Programa de Formação Continuada no Campus Codó
                para servidores partindo das necessidades específicas sugeridas
                pelos próprios colegas, permanente e periodicamente.
              </h3>
            </div>
          </section>
          <section>
            <div className="contentSectionSubPage">
              <div className="titleSection">
                <h1>Infraestrutura</h1>
                <img src={infraestrutura} />
              </div>
              <h3>
                1. Promover estudo de viabilidade para reforma e ampliação dos
                blocos de salas de aulas e laboratórios, bem como realizar as
                manutenções periódicas dos diversos espaços físicos do Campus;
              </h3>
              <h3>
                2. Realizar adequação e ampliação da capacidade do sistema
                elétrico do Campus, inclusive implementando o uso de energia
                solar;
              </h3>
              <h3>
                3. Estruturar um ambiente de convivência, lazer e descanso para
                o servidor
              </h3>
              <h3>
                4. Reformar os vestiários dos alunos semi-residentes, a quadra
                poliesportiva, inclusive com sua cobertura, e o campo de futebol
                society;
              </h3>
              <h3>
                5. Construção do ginásio poliesportivo e da nova biblioteca;
              </h3>
              <h3>
                6. Melhoria no acesso a área administrativa do Campus, com o
                restabelecimento do acesso sobre o riacho, construção de
                calçadas, cercamento com estacas de concreto e iluminação
                adequada;
              </h3>
              <h3>
                7. Realizar a sinalização de trânsito (trecho da área interna)
                do Campus, implantar redutores de velocidade, permitir a entrada
                somente com uso de capacete (condutor e passageiro).
              </h3>
            </div>
          </section>
          <section>
            <div className="contentSectionSubPage">
              <div className="titleSection">
                <h1>Comunicação</h1>
                <img src={comunicacao} />
              </div>
              <h3>
                1. Criar grupo permanente, composto pelos segmentos docente,
                administrativo e discente para elaborar e implementar ações de
                divulgação das ações do Campus nos diversos canais de
                comunicação como internet, rádios, televisão e outros;
              </h3>
              <h3>
                2. Melhorar a visibilidade das ações promovidas pelo Campus nos
                diversos canais de comunicação;
              </h3>
              <h3>
                3. Viabilizar canais de comunicação, nas redes sociais, com toda
                a comunidade, possibilitando a coleta de mais rápida de
                informações, abrindo espaço para sugestões, críticas e
                reclamações;
              </h3>
              <h3>
                4. Divulgação de aprovações e premiações recebidas pelos nossos
                alunos e professores;
              </h3>
              <h3>
                5. Garantir a comunicação, o diálogo e o acompanhamento das
                ações desenvolvidas pela gestão junto aos servidores e
                estudantes do Campus.
              </h3>
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
