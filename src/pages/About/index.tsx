import React from 'react';
import { Link } from 'react-router-dom';
import ImgExperiencias from '../../assets/img/Experiencias.png';
import ImgPerfil from '../../assets/img/Perfil.png';
import ImgHome from '../../assets/img/Home.png';
import ImgBlackFex from '../../assets/img/BlackFex.png';
import './index.css';

export default function About() {
  return (
    <div className="page-about">
        <img src={ImgBlackFex} alt="Feito por: BlackFex" className="blackfex-logo" />
        <div className="perfil">
            <img src={ImgPerfil} alt="Caique Correa" />
            <p className="nome">CAIQUE CORREA</p>
        </div>
        <div className="content-block">
            <Link to="/" className="btn home"><img src={ImgHome} alt="Home" /></Link>
            <div className="about-block">
                <span className="text">
                {`Meu nome é Caique, sou um estudante de Psicologia apaixonado por metodologia científica e pela área acadêmica (Pesquisa).

                Busco frequentemente me informar sobre atualizações de normas técnicas (ABNT/APA) e realizar cursos que me permitam aprimorar meus conhecimentos de metodologia científica para então transmiti-los, tendo em vista o objetivo de prestar contribuições para o avanço da pesquisa científica no Brasil.

                Atualmente estou no 4° ano de Psicologia e desde o meu segundo ano da graduação estou envolvido na condução de pesquisas e projetos na área de Educação e Saúde e, durante esse tempo, acumulei grandes experiências e desenvolvi competências que me permitem hoje elaborar trabalhos acadêmicos com maior qualidade.

                Atuei em um dos importantes núcleos de Ensino, Pesquisa e Extensão do UNISAL/Lorena nomeado “Observatório de Violências nas Escolas”, filiado à UNESCO e ao CNPq, tanto como voluntário quanto bolsista de Iniciação Científica e Extensão, desenvolvendo pesquisas e projetos, auxiliando na formatação destes, tirando dúvidas sobre metodologia científica, submissão de projetos ao Comitê de Ética em Pesquisa, formatando editais, e claro, aprendendo com profissionais de renome a como desenvolver trabalhos de excelência.

                Hoje, continuo a desenvolver pesquisas tanto fomentadas por Programas de Concessão de Bolsas quanto de maneira voluntária mediante colaboração com outros profissionais e companheiras de graduação, tendo em vista cada vez mais me aprimorar não somente como estudante e profissional em formação, mas também como ser humano, ético, crítico e implicado com a realidade e com o compromisso social com a vida humana.`}
                </span>
            </div>
            <Link to="/experiencias" className="btn experiencias"><img src={ImgExperiencias} alt="Experiências acadêmicas" /></Link>
        </div>
    </div>
  );
}